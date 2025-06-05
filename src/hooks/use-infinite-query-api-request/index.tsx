import { allQueries } from "@/data-services";
import { constructUrl } from "@/lib/utils/contruct-url";
import { AxiosErrorResponse } from "@/types/global";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import useAxiosCustom from "../use-axios-custom";
import { UseInfiniteApiRequestProps } from "./types";

function useInfiniteApiQueryRequest<T = unknown>({
  key,
  options,
  config,
}: UseInfiniteApiRequestProps<T>) {
  const url = allQueries[key];
  const axiosFetch = useAxiosCustom();

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

  return useInfiniteQuery<
    T,
    AxiosErrorResponse,
    InfiniteData<T>,
    QueryKey,
    number
  >({
    queryKey: [key, url, config],
    queryFn: fetchData,
    initialPageParam: 1,
    ...options,
  });
}

export default useInfiniteApiQueryRequest;
