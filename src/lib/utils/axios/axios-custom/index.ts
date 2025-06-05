import axios from "axios";

const axiosCustom = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/vnd.github+json",
  },
});

export default axiosCustom;
