# 🍨 Reice

coming soon..

## Examples

Easily define your client

```typescript
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
```

Now say 👋

```typescript
import axios from "axios";

const myClient = new MyClient({
  instance: axios.create(),
  baseURL: "https://api.example.com",
});

await myClient.sayHello("hello");
```

👉 [more examples](./examples/)

## Contributing

We welcome contributions to enhance the functionality and usability of this utility. Feel free to submit issues for bug reports or feature requests, and create pull requests to suggest improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
