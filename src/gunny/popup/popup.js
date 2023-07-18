window.addEventListener("load", function (event) {
	$("#popup-signin .signin-btn").on("click", function (event) {
		$("#popup-signin").removeClass("active");
		$(".gunny_frame3 .signin-btn").removeAttr("data-popup");
		$(".gunny_frame3 .signin-btn").html("Đăng Xuất");
	});

	$("#popup-congrats .btn").on('click', function (event) {
		$("#popup-congrats").removeClass("active");
	})
});
