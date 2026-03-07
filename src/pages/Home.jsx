import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="app-wrapper">
      <Helmet>
        <title>AgriSense Medi-Caps | Smart IoT Farming Platform Indore</title>
        <meta name="description" content="AgriSense connects farmers with expert agronomists using real-time ESP32 IoT sensor data. Start monitoring your soil health today." />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;