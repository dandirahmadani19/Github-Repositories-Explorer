import {
  useInfiniteQuery,
  InfiniteData,
  QueryKey,
} from "@tanstack/react-query";
import { allQueries } from "@/data-services";
import { constructUrl } from "@/lib/utils/contruct-url";
import { AxiosErrorResponse } from "@/types/global";
import useAxiosGithubToken from "../use-axios-github-token";
import { UseInfiniteApiRequestProps } from "./types";

function useInfiniteApiQueryRequest<T = unknown>({
  key,
  options,
  config,
  apiType = "github-token",
}: UseInfiniteApiRequestProps<T>) {
  const url = allQueries[key];
  const axiosFetch = {
    "github-token": useAxiosGithubToken(),
  }[apiType];

  const fetchData = async ({ pageParam = 1 }) => {
    const replacedUrl = constructUrl(url, config);
    const response = await axiosFetch({
      method: "GET",
      url: replacedUrl,
      params: {
        ...config?.query,
        page: pageParam,
      },
    });

    return response?.data ?? null;
  };

  return useInfiniteQuery<T, AxiosErrorResponse, InfiniteData<T>, QueryKey, number>({
    queryKey: [key, url, config],
    queryFn: fetchData,
    initialPageParam: 1,
    ...options,
  });
}

export default useInfiniteApiQueryRequest;
