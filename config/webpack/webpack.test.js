/**
 * Created by pheadra on 9/18/16.
 */

'use strict'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const debug = require('debug')('app:webpack:config')
debug('Creating testing configuration.')

module.exports = require('./webpack.base.js')({
  entry: { },
  output: { },
  cssLoaders : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap!postcss-loader' }),
  plugins: [ ],
  resolve : {
    mainFields : undefined
  },
  externals: {
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  },
  devtool: 'cheap-module-source-map'
})
