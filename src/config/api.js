const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export const API_ENDPOINTS = {
  SENSOR_DATA: `${API_BASE_URL}/api/sensors/data`,
  MY_SENSOR_DATA: `${API_BASE_URL}/api/sensors/my-data`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  ME: `${API_BASE_URL}/api/auth/me`,
  REGISTER_SENSOR: `${API_BASE_URL}/api/sensors/register`,
};

export default API_BASE_URL;