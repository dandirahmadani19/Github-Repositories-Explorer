import axios from "axios";

const axiosGithubToken = axios.create({
  // withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    // Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN_GITHUB}`,
    Accept: "application/vnd.github+json",
  },
});

export default axiosGithubToken;
