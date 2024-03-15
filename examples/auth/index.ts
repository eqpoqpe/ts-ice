import axios, { AxiosRequestConfig } from "axios";
import {
  ReiceRest,
  convertRouteParamsToUrlString,
  mergeOptions4AuthHeaders,
} from "reice";

const apiConstants = {
  "Say hello": "say/:text" as const,
};

export class MyClient extends ReiceRest {
  private _token: string = "";

  token(v: string) {
    this._token = v;
  }

  async sayHello(text: string, options?: AxiosRequestConfig) {
    return await this._axios.get(
      convertRouteParamsToUrlString(apiConstants["Say hello"], { text }),
      mergeOptions4AuthHeaders(this._token, options),
    );
  }
}

const myClient = new MyClient({
  instance: axios.create(),
  baseURL: "https://api.example.com",
});

await myClient.sayHello("hello");
