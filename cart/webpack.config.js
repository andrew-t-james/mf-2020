const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/bootstrap",
        "./CartIndexSplitOne": "./split-one/bootstrap",
      },
      shared: ["faker"],
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
