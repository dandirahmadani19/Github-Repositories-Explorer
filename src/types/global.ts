import { AxiosError } from "axios";

// eslint-disable-next-line
export interface SuccessResponse<T = any> {
  message: string;
  data: T;
}

export type ErrorResponse = {
  error: string;
  message: string;
};

export type AxiosErrorResponse = AxiosError<ErrorResponse>;
