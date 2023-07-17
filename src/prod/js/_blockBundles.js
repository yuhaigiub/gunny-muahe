var blockBundles;

/*
interface blockBundles = {
			${collection_id}: {
				${group_id}: {
					${block_id}: {
						html: require(url),
						scss: require(url),
						js: require(url),
						dir: "${collection_id}/${group_id}/${group_id}"
					}
				}
			}
}
*/

try {
	blockBundles = {
		// insert bundle here
		collection: {
			frames: {
				frame1: {
					html: require("../../gunny/frame1/frame1.html.twig"),
					scss: require("../../gunny/frame1/frame1.scss"),
					js: require("../../gunny/frame1/frame1.js"),
					dir: "../../gunny/frame1/frame1",
				},
				frame2: {
					html: require("../../gunny/frame2/frame2.html.twig"),
					scss: require("../../gunny/frame2/frame2.scss"),
					js: require("../../gunny/frame2/frame2.js"),
					dir: "../../gunny/frame2/frame2",
				},
				frame3: {
					html: require("../../gunny/frame3/frame3.html.twig"),
					scss: require("../../gunny/frame3/frame3.scss"),
					js: require("../../gunny/frame3/frame3.js"),
					dir: "../../gunny/frame3/frame3",
				},
			},
			floats: {
				float_left: {
					html: require("../../gunny/float_left/float_left.html.twig"),
					scss: require("../../gunny/float_left/float_left.scss"),
					js: require("../../gunny/float_left/float_left.js"),
					dir: "../../gunny/float_left/float_left",
				},
				float_bottom: {
					html: require("../../gunny/float_bottom/float_bottom.html.twig"),
					scss: require("../../gunny/float_bottom/float_bottom.scss"),
					js: require("../../gunny/float_bottom/float_bottom.js"),
					dir: "../../gunny/float_bottom/float_bottom",
				},
			},
			popup: {
				html: {
					confirm: require("../../gunny/popup/html/popup_confirm.html.twig"),
					congrats: require("../../gunny/popup/html/popup_congrats.html.twig"),
					content: require("../../gunny/popup/html/popup_content.html.twig"),
					signin: require("../../gunny/popup/html/popup_signin.html.twig"),
				},
				scss: require("../../gunny/popup/popup.scss"),
				js: require("../../gunny/popup/popup.js"),
				dir: "../../gunny/popup/popup",
			},
		},
	};
} catch (error) {
	console.log(error);
}

export default blockBundles;
