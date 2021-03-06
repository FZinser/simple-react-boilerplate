const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')
const webpack = require('webpack')
const rupture = require('rupture')
const cssnano = require('cssnano')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

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
		publicPath: '/',
		filename: 'js/index.[hash].js',
		chunkFilename: 'js/[name].[hash].js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	},
	plugins: [
		new HtmlWebpackPlugin({template: 'src/index.html'}),
		new webpack.ProvidePlugin({'React': 'react'}),
		new MiniCssExtractPlugin({
			filename: devMode ? 'styl/[name].css' : 'styl/[name].[hash].css',
			chunkFilename: "styl/[id].[hash].css"
		}),
		new SVGSpritemapPlugin([
				'./src/Images/icons/*.svg',
				'./src/Images/icons/**/*.svg'
			], {
				output: {
					filename: 'images/icons/sprite.svg'
				},
				sprite: { prefix: false }
			})
	],
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
					{ loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
					{ loader: "css-loader" },
					{ loader: "postcss-loader", options: {plugins:[cssnano({zindex: false})] }},
					{ loader: "stylus-loader", options: {use: [rupture()]} }
				],
				exclude: /node_modules/
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: 
				[
					{loader: 'file-loader', options: {outputPath: 'images'}},
					'image-webpack-loader'
				],
				exclude: /node_modules/
			}
		]
	}
}