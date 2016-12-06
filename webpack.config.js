// webpack.config.js
const webpack = require('webpack')

//Copy files
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const PATHS = {
  app: path.join(__dirname, './app.js'),
  build: path.join(__dirname, './public'),
  cssLoc: path.join(__dirname, './assets/css'),
  imagesLoc: path.join(__dirname, './images')
};

module.exports = {
  debug: true,
  devtool: "#eval-source-map",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  //bundle app from here
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: PATHS.build
  },
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    outputPath: PATHS.build
  },
  devtool: "sourceMap", //or inline source-map
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./assets/css")]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
