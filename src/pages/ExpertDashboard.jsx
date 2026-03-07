import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ExpertSidebar from "../components/expert/ExpertSidebar";
import ExpertHeader from "../components/expert/ExpertHeader";
import ReviewQueue from "../components/expert/ReviewQueue";
import ReviewDetail from "../components/expert/ReviewDetail";
import ExpertHistory from "../components/expert/ExpertHistory";
import ExpertSettings from "../components/expert/ExpertSettings";
import ExpertBroadcast from "../components/expert/ExpertBroadcast";
import "../../expert-dashboard.css";
import { Helmet } from "react-helmet-async";

const ExpertDashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isExpert } = useAuth();

  const [activeTab, setActiveTab] = useState("queue");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null); // for review detail

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (!isExpert) {
      navigate("/");
    }
  }, [isAuthenticated, isExpert, navigate]);

  if (!isAuthenticated || !isExpert) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "queue":
        return (
          <ReviewQueue
            onSelectRequest={(req) => {
              setSelectedRequest(req);
              setActiveTab("review");
            }}
          />
        );
      case "review":
        return (
          <ReviewDetail
            request={selectedRequest}
            onBack={() => setActiveTab("queue")}
            onSubmitted={() => setActiveTab("history")}
          />
        );
      case "history":   return <ExpertHistory />;
      case "broadcast": return <ExpertBroadcast />;
      case "settings":  return <ExpertSettings />;
      default:          return <ReviewQueue />;
    }
  };

  return (
    <div className={`exp-layout ${sidebarOpen ? "" : "exp-sidebar-collapsed"}`}>
      <Helmet>
        <title>Expert-Dashboard | AgriSense</title>
        <meta name="description" content="AgriSense Expert Dashboard. Manage your review queue, view analysis history, and update your settings." />
      </Helmet>
      <ExpertSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="exp-main">
        <ExpertHeader
          activeTab={activeTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="exp-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ExpertDashboard;