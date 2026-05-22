const path = require("path");
const { container: { ModuleFederationPlugin } } = require("webpack");
const { LicenseWebpackPlugin } = require("license-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      shared: ["react"]
    }),
    new LicenseWebpackPlugin()
  ]
};
