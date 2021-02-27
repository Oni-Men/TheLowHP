module.exports = {
	publicPath: "./",
	outputDir: "./docs",
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.md$/,
					exclude: /node_modules/,
					use: ["vue-loader"],
				},
			],
		},
	},
};
