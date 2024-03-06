import { AxiosRequestConfig } from "axios";
import { defu } from "defu";

export function mergeOptions4AuthHeaders(
  sessionKey: string,
  options: AxiosRequestConfig | undefined
) {
  return defu(
    { headers: { Authorization: `${sessionKey}` } } as AxiosRequestConfig,
    options
  );
}
