const path = require('path')
const webpack = require('webpack')
const rupture = require('rupture')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		]
	},
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		chunkFilename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						[
							'@babel/preset-env',
							{
								targets: [
									'last 10 versions',
									'not dead',
									'not < 5%'
								],
								useBuiltIns: 'entry'
							}
						],
						'@babel/preset-react'
					],
					plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import']
				}
			},
			{
				test: /\.styl$/,
				use: 
				[
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "stylus-loader", options: {use: [rupture()]} }
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: 'src/index.html'}),
		new webpack.ProvidePlugin({'React': 'react'})
	]
}