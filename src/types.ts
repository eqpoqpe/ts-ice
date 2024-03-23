import { Axios, CreateAxiosDefaults, AxiosRequestConfig } from "axios";

export type InterceptorsFn = {
  (ors: Axios["interceptors"]): void;
};

export type RestCreateDefaults = {
  instance: Axios;
} & Pick<CreateAxiosDefaults, "baseURL" | "adapter">;
export type ReiceRequestConfig = AxiosRequestConfig;
