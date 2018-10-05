const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "style.css" }),

    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ]
};
