const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const criticalPlugin = require('critical-plugin')
var criticalOptions = {
	inline: true,
	width: 1300,
	height: 900,
	minify: true,
	extract: true,
	timeout: 30000,
	pathPrefix: '/src',
	ignore: ['font-face'],
	ignoreOptions: {}
}
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = merge(baseConfig, {
	mode: 'production',
	plugins: [
		new BundleAnalyzerPlugin({analyzerMode: 'static', openAnalyzer: false})
		// new criticalPlugin({critical: criticalOptions})
		],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	}
})