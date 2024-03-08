// referenced from https://github.com/ts-rest/ts-rest/blob/main/libs/ts-rest/core/src/lib/paths.ts
type RecursivelyExtractPathParams<T extends string> =
  T extends `/:${infer PathParam}/${infer Right}`
    ? { [key in PathParam]: string } & RecursivelyExtractPathParams<Right>
    : T extends `/:${infer PathParam}`
      ? { [key in PathParam]: string }
      : T extends `/${string}/${infer Right}`
        ? RecursivelyExtractPathParams<Right>
        : T extends `/${string}`
          ? {}
          : T extends `:${infer PathParam}/${infer Right}`
            ? {
                [key in PathParam]: string;
              } & RecursivelyExtractPathParams<Right>
            : T extends `:${infer PathParam}`
              ? { [key in PathParam]: string }
              : T extends `${string}/${infer Right}`
                ? RecursivelyExtractPathParams<Right>
                : {};

export function convertRouteParamsToUrlString<U extends string>(
  url: U,
  params: RecursivelyExtractPathParams<U>,
) {}
