'use strict'
let webpack = require('webpack')
let ExtractTextPlugin = require("extract-text-webpack-plugin")
let extractCSS = new ExtractTextPlugin('style.css')

let autoprefixer = require('autoprefixer')
let precss       = require('precss')
let Clean = require('clean-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry : { },
	output : { },
	module : {
	 	preLoaders: [
	 		{ test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
	 	],
	 	loaders: [
	    	{ test: /\.css$/, loader: 'null' },
	    	{ test: /\.(svg|woff|woff2|ttf|eot|otf)/, loader: 'file?name=public/fonts/[name].[ext]' },
	    	{ test: /\.(jpg|png|gif)$/,
      			loaders: [
        			'file-loader',
        			'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
      			],
   			},
   			{ test: /\.json$/, loader: 'null' }
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
		/* HMR시 업데이트 되는 파일 명을 알려주는 plugin*/
		new webpack.NamedModulesPlugin(),
		new webpack.ProvidePlugin({
	      // make fetch available
	      fetch: 'exports?self.fetch!whatwg-fetch',
	    }),
		new ExtractTextPlugin('style.css'),
		new webpack.DefinePlugin({
	      'process.env': { 
	      	NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
	      }
	    })
	],
	externals: {
      'react/addons'                   : true,
      'react/lib/ExecutionEnvironment' : true,
      'react/lib/ReactContext'         : 'window'
    },
	devtool : 'inline-source-map',
	target: 'web',
	stats: false,
  	progress: false
};