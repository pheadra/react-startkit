'use strict'
const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')

const debug = require('debug')('app:webpack:config')
debug('Creating test configuration.')

module.exports = {
  entry: {},
  output: {},
  module: {
    preLoaders: [

    ],
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel', exclude: [/node_modules/] },
      { test: /\.css$/, loader: 'null' },
      { test: /\.(svg|woff|woff2|ttf|eot|otf)/, loader: 'file?name=public/fonts/[name].[ext]' },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  resolve: {
    root: [__dirname + '/app'],
    extensions: ['', '.js', '.jsx', 'json']
  },
  plugins: [
    new Clean(['public']),
    /* HMR시 업데이트 되는 파일 명을 알려주는 plugin*/
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'exports?self.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  externals: {
    cheerio: 'window',
    'react/addons'                   : true,
    'react/lib/ExecutionEnvironment' : true,
    'react/lib/ReactContext'         : 'window'
  },
  devtool: 'cheap-module-source-map',
  target: 'web'
}
