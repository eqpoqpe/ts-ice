import { Headers } from "./utils/headers";

type InstanceCreateFn<T, H extends Headers> = {
  (options: Pick<RestCreateDefaults<T, H>, "baseURL">): T;
};
export type RestCreateDefaults<T, H extends Headers> = {
  baseURL: string;
  instanceCreateFn: InstanceCreateFn<T, H>;
  headers?: H;
};

export class IceRest<T, H extends Headers> {
  public readonly request: T;

  constructor(config: RestCreateDefaults<T, H>) {
    const { instanceCreateFn, ...options } = config;

    this.request = instanceCreateFn(options);
  }
}
