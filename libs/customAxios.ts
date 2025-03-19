import Axios, { AxiosError, AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://wallyops.com"
      : "http://192.168.0.70:3005",
});

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const headers = {
    ...config.headers,
    ...options?.headers,
  };
  const promise = AXIOS_INSTANCE({
    withCredentials: true,
    ...config,
    ...options,
    headers,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
