import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use the environment variable for the backend URL
  withCredentials: true, // Include this if your backend requires credentials (e.g., cookies)
});

export default api;