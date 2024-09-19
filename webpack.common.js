const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project Battleship',
			template: './src/template.html',
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
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
			{
				test: /\.(ttf|eot|svg)$/,
				type: 'asset/resource',
			},
			// {
			// 	test: /.html$/i,
			// 	loader: 'html-loader',
			// },
		],
	},
	resolve: {
		alias: {
			config$: './configs/app-config.js',
			react: './vendor/react-master',
		},
		extensions: ['.js', '.jsx'],
		modules: [
			'node_modules',
			'bower_components',
			'shared',
			'/shared/vendor/modules',
		],
	},
	optimization: {
		runtimeChunk: 'single',
	},
};
