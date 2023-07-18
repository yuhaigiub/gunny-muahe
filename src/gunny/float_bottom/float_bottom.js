import scrollFrame from "../../setup/js/_scrollFrame.2";

$(document).on("gunny_float_bottom rendered", {}, function (event, uniqueId) {
	const $this = $("#" + uniqueId);
	$this.find(".item1").on("click", function (event) {
		scrollFrame.func.scrollTo("#gunny_frame1_EwBx8", 0);
	});
	$this.find(".item5").on("click", function (event) {
		scrollFrame.func.scrollTo("#gunny_frame2_ASesx", -36);
	});
	$this.find(".item6").on("click", function (event) {
		scrollFrame.func.scrollTo("#gunny_frame3_Ajs24", 10);
	});
});
