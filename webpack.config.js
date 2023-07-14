const { configGenerator } = require("./webpack.generator.js");

/*

configGenerator(options, dir="", fileNames=[], collections={collection_id: block_ids[]}) {

}

*/

module.exports = (env, options) => [
	configGenerator(options, "prod", ["index"], {
		gunny: ["frame1", "frame2", "frame3", "float_left", "float_bottom", "popup"],
	}),
	configGenerator(options, "article", ["index"], {
		_article: ["default"],
	}),
];
