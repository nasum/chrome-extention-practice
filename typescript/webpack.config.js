const webpack = require("webpack");
const HtmlWeboackPlugin = require("html-webpack-plugin");
const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.CleanPlugin(),
    new HtmlWeboackPlugin(),
    new WebpackExtensionManifestPlugin({
      config: {
        extend: {
          name: "my manifest",
          description: "my description",
          manifest_version: 3,
          action: {
            default_popup: "index.html",
          },
        },
      },
      pkgJsonProps: ["version"],
    }),
  ],
};
