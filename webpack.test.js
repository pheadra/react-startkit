'use strict'
const webpack = require('webpack')

const debug = require('debug')('app:webpack:config')
debug('Creating test configuration.')

module.exports = require('./webpack.base')({
  entry: { },
  output: { },
  cssLoaders : 'null',
  plugins: [ ],
  resolve : {
    mainFields : undefined
  },
  externals: {
    cheerio: 'window',
    'react/addons'                   : true,
    'react/lib/ExecutionEnvironment' : true,
    'react/lib/ReactContext'         : 'window'
  },
  devtool: 'cheap-module-source-map'
})
