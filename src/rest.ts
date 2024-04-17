import { RestCreateDefaults } from "./types";

export class ReiceRest<T, H extends object> {
  public readonly _request: T;

  constructor(config: RestCreateDefaults<T, H>) {
    const { instanceCreateFn, ...options } = config;

    this._request = instanceCreateFn(options);
  }
}
