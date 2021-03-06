const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		port: 8080,
		historyApiFallback: true,
		host: '0.0.0.0'
	}
})