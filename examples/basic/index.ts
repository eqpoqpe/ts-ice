import axios from "axios";
import { ReiceRest, convertRouteParamsToUrlString } from "reice";

const apiConstants = {
  "Say hello": "say/:text" as const,
};

export class MyClient extends ReiceRest {
  async sayHello(text: string) {
    return await this._axios.get(
      convertRouteParamsToUrlString(apiConstants["Say hello"], { text }),
    );
  }
}

const myClient = new MyClient({
  instance: axios.create(),
  baseURL: "https://api.example.com",
});

await myClient.sayHello("hello");
