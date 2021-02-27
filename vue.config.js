module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/TheLowHP/" : "/",
	assetsDir: "",
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
