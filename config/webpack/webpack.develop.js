/**
 * Created by pheadra on 9/18/16.
 */

'use strict'
const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = require('./webpack.base.js')({
  entry: {
    'app': './app/main.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  cssLoaders : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap!postcss-loader' }),
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve : {
    mainFields : ['main', 'browser']
  },
  externals: {
    'jquery': 'jquery'
  },
  devtool: 'cheap-module-eval-source-map'
})
