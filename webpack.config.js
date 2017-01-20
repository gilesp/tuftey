/* eslint angular/json-functions: 0 */
"use strict";

var webpack = require("webpack");
var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    "tuftey": path.resolve(__dirname, "src", "index.js")
  },
  plugins: [

    new webpack.DefinePlugin({
      MERCURY_API_KEY: "\"" + process.env.MERCURY_API_KEY + "\""
    }),
    
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false // Supress uglification warnings
      }
    })

  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract("style", "css?-url!sass")
      },
      {
        test: /\.html/,
        loader: "raw"
      }
    ]
  }
};


module.exports = config;
