const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js'
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
				test: /\.css$/,
				use: ['style-loader', 'css-loader'] ,
				exclude: /node_modules/
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	})]
}