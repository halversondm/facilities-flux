const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
	entry: './app/app.js',
	mode: 'production',
	output: {
		filename: 'main-[hash].js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.ttf|woff|woff2|svg|eot$/, use: 'file-loader' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: 'app/index.tpl.html' })
	]
};

module.exports = webpackConfig;