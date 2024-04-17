type InstanceCreateFn<T> = {
  (options: Pick<RestCreateDefaults<T>, "baseURL">): T;
};
export type RestCreateDefaults<T> = {
  baseURL: string;
  instanceCreateFn: InstanceCreateFn<T>;
  // headers: H;
};
