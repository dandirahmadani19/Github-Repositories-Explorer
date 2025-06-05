import { UseInfiniteQueryOptions, QueryKey, InfiniteData } from "@tanstack/react-query";
import { AxiosErrorResponse } from "@/types/global";
import { AllQueriesKeys } from "@/data-services";

export type UseInfiniteApiRequestProps<T> = {
  key: AllQueriesKeys;
  config?: {
    params?: { [key: string]: string };
    query?: { [key: string]: unknown };
  };
  options: Omit<
    UseInfiniteQueryOptions<T, AxiosErrorResponse, InfiniteData<T>, QueryKey, number>,
    "queryKey" | "queryFn" | "initialPageParam"
  >;
};