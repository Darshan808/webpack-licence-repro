# webpack-licence-repro

Minimal repro for https://github.com/webpack/webpack/pull/20860#issuecomment-4509553369.

- `package-5.106` uses webpack `5.106.0` + `license-webpack-plugin@^2.3.14` and is expected to build successfully.
- `package-5.107` uses webpack `5.107.0` + `license-webpack-plugin@^2.3.14` and is expected to fail with:

  `HookWebpackError: Cannot read properties of undefined (reading 'trim')`

CI builds both packages; the `package-5.107` build reproduces the failure.
