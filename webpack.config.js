const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

function optimization() {
	const options = {
		splitChunks: {
			chunks: 'all'
		}
	};
	if (isProd) {
		options.minimizer = [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()];
	}
	return options;
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		index: './index.tsx'
		// second: './second.js', // another entry point (no necessary)
	},
	devtool: isDev ? 'inline-source-map' : false,
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		hot: isDev,
		open: true,
		// support HTML5 History API for react router
		historyApiFallback: true,
		client: {
			overlay: {
				errors: isDev,
				warnings: isDev
			}
		}
		// listen to port 5000, change this to another port if another server
		// is already listening on this port
		// port: 5000,

		// proxy requests to the JSON server REST service
		// proxy: {
		// 	'/widgets': {
		// 		// server to proxy
		// 		target: 'http://0.0.0.0:3010'
		// 	}
		// }
	},
	optimization: optimization(),
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			favicon: 'purple.png',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css'
		}),
		new EslintWebpackPlugin()
	],
	resolve: {
		extensions: ['.png', '.svg', '.jpg', '.jpeg', '.gif', '.js', '.ts', '.jsx', '.tsx', '.sass', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript']
					}
				}
			},
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
					}
				}
			}
		]
	}
};
