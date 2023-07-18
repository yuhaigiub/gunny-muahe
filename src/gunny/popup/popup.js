import scrollFrame from "../../setup/js/_scrollFrame.2";

window.addEventListener("load", function (event) {
	$("#popup-signin .signin-btn").on("click", function (event) {
		$("#popup-signin").removeClass("active");
		$(".gunny_frame3 .signin-btn").removeAttr("data-popup");
		$(".gunny_frame3 .signin-btn").html("Đăng Xuất");
	});

	$("#popup-congrats .btn").on("click", function (event) {
		$("#popup-congrats").removeClass("active");
	});


	$(".item1").on("click", function (event) {
		scrollFrame.func.scrollTo("#gunny_frame1_EwBx8", 10);
	});
	$(".item5").on("click", function (event) {
		scrollFrame.func.scrollTo("#gunny_frame2_ASesx", 10);
	});
	$(".item6").on("click", function (event) {
		scrollFrame.func.scrollTo("#gunny_frame3_Ajs24", 10);
	});
});
