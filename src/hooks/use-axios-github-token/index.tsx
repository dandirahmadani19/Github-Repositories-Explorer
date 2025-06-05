import axiosGithubToken from "@/lib/utils/axios/axios-github-token";
import { AxiosRequestConfig } from "axios";
import { useCallback } from "react";

function useAxiosGithubToken() {
  const axiosFetch = useCallback(async (config: AxiosRequestConfig) => {
    if (!axiosGithubToken.defaults.baseURL)
      throw { message: "base url required" };
    if (!config.url) return;
    if (config.url.match(/undefined/g)) return;

    return await axiosGithubToken(config);
  }, []);

  return axiosFetch;
}

export default useAxiosGithubToken;
