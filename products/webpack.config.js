const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/bootstrap",
        "./ProductsSplitOne": "./split-one/bootstrap",
      },
      shared: ["faker"],
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
