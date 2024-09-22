const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		watchFiles: ['./src/template.html'],
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project Battleship',
			template: './src/template.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
		],
	},
	optimization: {
		runtimeChunk: 'single',
	},
};
