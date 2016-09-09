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
      filename: '[name].bundle.js'
    },
	module : {
	 	preLoaders: [],
	 	loaders: [
	    	{ 	test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
	    	{   test: /\.css$/, loader: ExtractTextPlugin.extract({fallbackLoader:'style', loader:'css?sourceMap!postcss'}) },
	    	{   test: /\.(svg|woff|ttf|eot|otf)/, loader: 'file'	},
	    	{   test: /\.(png|jpg|jpeg|gif)$/, loader: 'file'	}
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
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
	        title: 'KAKAO DSP',
	        template:  'app/assets/index.html', // Load a custom template
	        inject:'body'
	      })
	],
	target: 'web'
};