import { RestCreateDefaults } from "./types";

// export interface Rest<T> {
//   interceptors(fn: T): void;
// }

export class ReiceRest<T> {
  private readonly _request: T;

  constructor(config: RestCreateDefaults<T>) {
    const { instanceCreateFn, ...options } = config;

    this._request = instanceCreateFn(options);
  }
}
