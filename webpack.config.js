'use strict'
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = require('./webpack.base')({
  entry: {
    'app': './app/main.js'
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  cssLoaders : ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: 'css?sourceMap!postcss' }),
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve : {
    mainFields : ['main', 'browser']
  },
  externals: { },
  devtool: 'cheap-module-eval-source-map'
})
