const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const webpackConfig = {
	entry: {
		facilities: './app/facilities/facilities.js',
		tab: './app/tab/tab.js'
	},
	mode: process.env.NODE_ENV,
	devServer: {
		contentBase: '/dist',
		hot: true,
		port: 3001
	},
	output: {
		filename: devMode ? '[name].js' : '[name]-[hash].js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
			{
				test: /\.css$/, use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader']
			},
			{ test: /\.ttf|woff|woff2|svg|eot$/, use: 'file-loader' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './app/index.tpl.html', filename: 'tab.html', chunks: ['tab'] }),
		new HtmlWebpackPlugin({ template: './app/index.tpl.html', filename: 'facilities.html', chunks: ['facilities'] }),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name]-[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id]-[hash].css',
		}),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = webpackConfig;
