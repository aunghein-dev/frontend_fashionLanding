// apiClient.ts
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
