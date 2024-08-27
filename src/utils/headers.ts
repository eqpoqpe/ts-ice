import { defu } from "defu";

export type Headers = Record<string, string>;
export function mergeOptions4AuthHeaders<T extends Headers>(
  authKey: string,
  options: T | undefined,
) {
  return defu(
    { headers: { Authorization: `${authKey}` } } as unknown as T,
    options,
  );
}
