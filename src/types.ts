import { Axios, CreateAxiosDefaults } from "axios";

export type InterceptorsFn = {
  (ors: Axios["interceptors"]): void;
};

export type RestCreateDefaults = {
  instance: Axios;
} & Pick<CreateAxiosDefaults, "baseURL" | "adapter">;
