const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const devEntry = {
	facilities: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './app/facilities/facilities.js'],
	tab: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','./app/tab/tab.js']
};

const prodEntry = {
    facilities: './app/facilities/facilities.js',
    tab: './app/tab/tab.js'
};

const webpackConfig = {
	entry: devMode ? devEntry: prodEntry,
	mode: process.env.NODE_ENV,
	output: {
		filename: devMode ? '[name].js' : '[name]-[hash].js',
		publicPath: '/'
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
