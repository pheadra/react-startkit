'use strict'
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const autoprefixer = require('autoprefixer')
const precss = require('precss')
const Clean = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const debug = require('debug')('app:webpack:config')
debug('Creating configuration.')


module.exports = {
  entry: {
    'app': './app/main.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].bundle.js'
  },
  module: {
    preLoaders: [],
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: 'css?sourceMap!postcss' }) },
      { test: /\.(svg|woff|woff2|ttf|eot|otf)/, loader: 'file?name=public/fonts/[name].[ext]' },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    root: [__dirname + '/app'],
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  postcss: function () {
    return [autoprefixer({
      browsers: ['last 2 versions']
    }),
      precss({})]
  },
  plugins: [
    new Clean(['public']),
    /* HMR시 업데이트 되는 파일 명을 알려주는 plugin*/
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports?self.fetch!whatwg-fetch'
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'app/assets/index.html', // Load a custom template
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  target: 'web',
  stats: false,
  progress: false
}
