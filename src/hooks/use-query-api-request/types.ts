import { AllQueriesKeys } from "@/data-services";
import { AxiosErrorResponse } from "@/types/global";
import { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export type UseQueryApiRequestProps<T> = {
  key: AllQueriesKeys;
  apiType?: "github-token" | "github-without-token";
  config?: {
    params?: { [key: string]: string };
    query?: { [key: string]: unknown };
  };
  options?: Omit<
    UseQueryOptions<T, AxiosErrorResponse, T, QueryKey>,
    "queryKey" | "queryFn"
  >;
};
