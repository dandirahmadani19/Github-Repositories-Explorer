import axiosCustom from "@/lib/utils/axios/axios-custom";
import { AxiosRequestConfig } from "axios";
import { useCallback } from "react";

function useAxiosCustom() {
  const axiosFetch = useCallback(async (config: AxiosRequestConfig) => {
    if (!axiosCustom.defaults.baseURL)
      throw { message: "base url required" };
    if (!config.url) return;
    if (config.url.match(/undefined/g)) return;

    return await axiosCustom(config);
  }, []);

  return axiosFetch;
}

export default useAxiosCustom;
