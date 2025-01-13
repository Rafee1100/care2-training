import axios from "axios";

const BASE_URI = "";

const axiosInstance = axios.create({
  baseURL: `${BASE_URI}/api/v1`,
});

export default axiosInstance;
