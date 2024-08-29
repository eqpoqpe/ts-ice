# TS ice

🍨 The easy way to make your clear REST client library.

## Usage

Firstly, set `compilerOptions.moduleResolution` be `Bundler` to your project `tsconfig.json`.

## Examples

Easily define your client

```typescript
type MyRequest = {
  <T, H extends Record<string, string>>(data: T, headers: H): Promise<Response>;
};
type MyHeader = {
  Authorization: string;
};

class SampleClient extends IceRest<MyRequest, MyHeader> {
  async hello(message: string) {
    return await this.request({ message }, {});
  }
}
```

Now say 👋

```typescript
const sampleClient = new SampleClient({
  instanceCreateFn(options) {
    return async (data) => {
      const { baseURL } = options;

      return await fetch(baseURL, { body: JSON.stringify(data) });
    };
  },
  baseURL: "http://api.example.com",
});

await sampleClient.hello("");
```

👉 [more examples](./examples/)

## Contributing

We welcome contributions to enhance the functionality and usability of this utility. Feel free to submit issues for bug reports or feature requests, and create pull requests to suggest improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
