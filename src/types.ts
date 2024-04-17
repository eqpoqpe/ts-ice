type InstanceCreateFn<T, H> = {
  (options: Pick<RestCreateDefaults<T, H>, "baseURL">): T;
};
export type RestCreateDefaults<T, H extends object> = {
  baseURL: string;
  instanceCreateFn: InstanceCreateFn<T, H>;
  headers?: H;
};
