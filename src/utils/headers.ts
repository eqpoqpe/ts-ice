import { defu } from "defu";

export function mergeOptions4AuthHeaders<T extends object>(
  sessionKey: string,
  options: T | undefined,
) {
  return defu({ headers: { Authorization: `${sessionKey}` } } as T, options);
}
