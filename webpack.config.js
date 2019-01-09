const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlExcludePlugin = require("html-webpack-exclude-assets-plugin");
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = {
	entry: {
		app: "./src/index.js",
		// sw: "./src/service_worker/sw.js"
	},
	output: {
		path: path.join(__dirname, "/build"),
		filename: '[name].bundle.js',
		publicPath: "/",
		globalObject: 'this'
	},
	devServer: {
		historyApiFallback: true
	},
	resolve: {
		extensions: ['jsx', '.js', '.scss', '.css', '.json']
	},
	module:
	{
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.(ttf|eot|svg|gif|woff2|woff|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				// include: SRC,
				use: [{
					loader: 'file-loader'
				}]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader', options: {
							includePaths: ['./node_modules']
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			// excludeAssets: [/sw.*.js/] // exclude injecting service worker script
		}),
		new HtmlExcludePlugin(),

		new Dotenv({
			path: "./.env",
			safe: false,
			systemvars: false,
			silent: true
		}),

		// new FaviconsWebpackPlugin({
		// 	// Your source logo
		// 	logo: './logo_blue.png',
		// 	// The prefix for all image files (might be a folder or a name)
		// 	prefix: 'icons-[hash]/',
		// 	// Emit all stats of the generated icons
		// 	emitStats: false,
		// 	// The name of the json containing all favicon information
		// 	statsFilename: 'iconstats-[hash].json',
		// 	// Generate a cache file with control hashes and
		// 	// don't rebuild the favicons until those hashes change
		// 	persistentCache: true,
		// 	// Inject the html into the html-webpack-plugin
		// 	inject: true,
		// 	// favicon background color (see https://github.com/haydenbleasel/favicons#usage)
		// 	background: '#fff',
		// 	// favicon app title (see https://github.com/haydenbleasel/favicons#usage)
		// 	title: 'Coinkudi',

		// 	// which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
		// 	icons: {
		// 	  android: true,
		// 	  appleIcon: true,
		// 	  appleStartup: true,
		// 	  coast: false,
		// 	  favicons: true,
		// 	  firefox: true,
		// 	  opengraph: false,
		// 	  twitter: false,
		// 	  yandex: false,
		// 	  windows: false
		// 	}
		//   })
	]
}