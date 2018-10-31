const uglify = require("./uglify");

module.exports = [
	{
		input: `src/plugin/index.js`,
		external: ["@egjs/flicking"],
		output: {
			format: "es",
			exports: "named",
			file: `./packages/flicking-plugins/dist/plugins.esm.js`
		}
	},
	{
		input: `src/plugin/index.js`,
		external: ["@egjs/flicking"],
		output: {
			globals: {
				"@egjs/flicking": "eg.Flicking"
			},
			name: `eg.Flicking.plugin`,
			format: "umd",
			exports: "named",
			file: `./packages/flicking-plugins/dist/all.js`
		}
	},
	{
		input: `src/plugin/index.js`,
		plugins: [uglify],
		external: ["@egjs/flicking"],
		output: {
			globals: {
				"@egjs/flicking": "eg.Flicking"
			},
			name: `eg.Flicking.plugin`,
			format: "umd",
			exports: "named",
			file: `./packages/flicking-plugins/dist/all.min.js`
		}
	}
];
