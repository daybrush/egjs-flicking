const uglify = require("./uglify");

module.exports = ["OpacityEffect", "ParallaxEffect"].map(id => (
	[
		{
			input: `./src/plugin/effects/${id}.js`,
			external: ["@egjs/flicking"],
			output: {
				globals: {
					"@egjs/flicking": "eg.Flicking"
				},
				name: `eg.Flicking.plugin.${id}`,
				file: `./packages/flicking-plugins/dist/plugin/${id}.js`
			}
		},
		{
			input: `./src/plugin/effects/${id}.js`,
			plugins: [uglify],
			external: ["@egjs/flicking"],
			output: {
				globals: {
					"@egjs/flicking": "eg.Flicking"
				},
				name: `eg.Flicking.plugin.${id}`,
				file: `./packages/flicking-plugins/dist/${id}.min.js`
			}
		}
	]
)).reduce((a, b) => a.concat(b), []);
