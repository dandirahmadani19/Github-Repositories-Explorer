import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";

import { allQueries } from "@/data-services";
import { constructUrl } from "@/lib/utils/contruct-url";
import { AxiosErrorResponse } from "@/types/global";
import useAxiosCustom from "../use-axios-custom";
import { UseQueryApiRequestProps } from "./types";

function useQueryApiRequest<T = unknown>({
  key,
  options,
  config,
}: UseQueryApiRequestProps<T>) {
  const url = allQueries[key];
  const replacedUrl = constructUrl(url, config);
  const axiosFetch = useAxiosCustom();

  const fetchData = async () => {
    const response = await axiosFetch({
      method: "GET",
      url: replacedUrl,
      params: config?.query,
    });

    if (!response) return null;
    return response.data;
  };

  const queryOptions: Partial<
    Omit<
      UseQueryOptions<T, AxiosErrorResponse, T, QueryKey>,
      "queryKey" | "queryFn"
    >
  > = {
    retry: 1,
    ...options,
  };

  const queryFetch = useQuery<T, AxiosErrorResponse>({
    queryKey: [key, url, config],
    queryFn: fetchData,
    ...queryOptions,
  });

  return queryFetch;
}

export default useQueryApiRequest;
