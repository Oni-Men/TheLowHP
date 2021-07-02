module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/thelow/" : "/",
	assetsDir: "",
	outputDir: "./built",
	transpileDependencies: ["@vue/reactivity"],
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
