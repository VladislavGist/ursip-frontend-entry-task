let webpack = require("webpack");
let path = require('path')
let ExtractTextPlugin = require("extract-text-webpack-plugin");

const PROCESS_ENV = process.env.NODE_ENV;
const URL_PATH = (PROCESS_ENV === "development") ? "http://localhost:3000" : "http://localhost:3000";

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	devServer: {
		port: 3000,
		proxy: [{
			path: '/api/',
			target: 'http://localhost:3001'
		}],
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
				exclude: ["/node_modules/", "/public/"]
			},
			{
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract("style", "css-loader!autoprefixer-loader!resolve-url-loader!sass-loader?sourceMap"),
				exclude: ["/node_modules/", "/public/"]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css", {
			allChunks: true,
			disable: process.env.NODE_ENV == "development"
		}),
		new webpack.DefinePlugin({
			'process.env': {
					NODE_ENV: JSON.stringify(PROCESS_ENV),
					URL: JSON.stringify(URL_PATH)
			}
		})
	]
}
