'use strict'
let webpack = require('webpack')
let ExtractTextPlugin = require("extract-text-webpack-plugin")

let extractCSS = new ExtractTextPlugin('style.css')
let autoprefixer = require('autoprefixer')
let precss       = require('precss')
let Clean = require('clean-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry : {
		'app' : './app'
	},
	output : {
	  path: __dirname + '/public',
      filename: '[name].[hash].js'
    },
	module : {
		preLoaders: [],
	 	loaders: [
	    	{ test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
	    	{ test: /\.css$/, loader: ExtractTextPlugin.extract({fallbackLoader:'style', loader:'css?sourceMap!postcss'}) },
	    	{ test: /\.(svg|woff|woff2|ttf|eot|otf)/, loader: 'file?name=public/fonts/[name].[ext]'	},
	    	{ test: /\.(jpg|png|gif)$/,
      			loaders: [
        			'file-loader',
        			'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
      			],
   			},
   			{ test: /\.json$/, loader: 'json-loader' }
	    ]
	},
	resolve : {
		root: [__dirname + '/app' ],
    	extensions: [ '', '.js', '.jsx' ]
	},
	postcss: function () {
        return [autoprefixer({
        	browsers: [ 'last 2 versions' ]
      	}),
      	precss({})]
    },
	plugins: [
		new Clean([ 'public' ]),
		new webpack.ProvidePlugin({
	      // make fetch available
	      fetch: 'exports?self.fetch!whatwg-fetch',
	    }),
		new ExtractTextPlugin('style.[hash].css'),
		new HtmlWebpackPlugin({
	        template:'app/assets/index.html', // Load a custom template
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
		      minifyURLs: true,
		    },
		    inject: true,
	    }),
		new webpack.LoaderOptionsPlugin({
	      minimize: true,
	      debug: false
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: true
	      },
	      output: {
	        comments: false
	      },
	      sourceMap: true
	    }),
	    new webpack.DefinePlugin({
	      'process.env': { 
	      	NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
	      }
	    })
	],
	devtool : 'source-map',
	target: 'web',
	stats: false,
  	progress: true
}