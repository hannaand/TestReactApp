var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
	entry: DEV + "/index.jsx",
	output: {
		path: OUTPUT,
		filename: "myCode.js"
	},
	module: {
		loaders: [
		{
			include: DEV,
			loader: "babel",
		},
		{ 	test: /\.(woff|png|jpg|gif)$/, 
			loader: 'url-loader?limit=10000' 
		},
		{ 	test: /\.(jpe?g|png|gif|svg)$/i, 
			loader: "file-loader?name=/dev/images/[name].[ext]"
		}
		]
	}
};

module.exports = config;