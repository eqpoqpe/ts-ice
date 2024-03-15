export {};
import { Axios } from "axios";
import { InterceptorsFn, RestCreateDefaults } from "./types";

export interface Rest {
  interceptors(fn: InterceptorsFn): void;
}

export class ReiceRest implements Rest {
  public readonly _axios: Axios;

  constructor(config: RestCreateDefaults) {
    const { adapter, baseURL, instance } = config;

    this._axios = instance;

    if (adapter) this._axios.defaults["adapter"] = adapter;
    if (baseURL) this._axios.defaults["baseURL"] = baseURL;
  }

  interceptors(fn: InterceptorsFn): void {
    fn(this._axios.interceptors);
  }
}
