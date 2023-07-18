import { dndPromotion } from "../../setup/js/_promotion";
import scrollWatch from "../../setup/js/_scrollWatch.2";

let prodTemplate = {
	debug: true,
	directory: "assets/popup/images/reward",
	item: {
		A: "1",
		B: "2",
		C: "3",
		D: "4",
		E: "5",
		F: "6",
		G: "7",
		H: "8",
		length: 9,
		type: "png",
	},
	names: [
		"Nguyệt Hạ Viên Vũ",
		"Hoa Ngữ Tinh Nương",
		"Đế Thính",
		"Vĩnh Sinh Lệnh x50",
		"Long Thủ Hồn Ngọc",
		"Quà Chọn Cẩm Nang-Kim",
		"Tinh Phách Linh Thạch x300",
		"Lì Xì Bất Ngờ x10",
	],
};

const randomInRange = (start, end) => {
	return Math.floor(Math.random() * (end - start + 1) + start);
};

$(document).on("gunny_frame3 rendered", {}, function (event, uniqueId) {
	const $this = $("#" + uniqueId);

	const items = [1, 2, 3, 4, 5, 6, 7, 8].map((index) => $(`#effect .effect__item#item-${index}`).eq(0));
	dndPromotion({
		debug: true,
		animBefore: function () {},
		animWait: function () {},
		wait: 0,
		animResult: function (listPrize) {
			if (typeof LuckyDrawExchangeModule !== "undefined") {
				LuckyDrawExchangeModule.fetchViewData();
			}

			const displayPrize = listPrize[0];
			console.log(displayPrize.characterImg, displayPrize.indexImg);
			const test = ["A", "B", "C", "D", "E", "F", "G", "H"];
			let innerHTML = "";
			for (let item of listPrize) {
				innerHTML += `<div class="prize prize-${item.indexImg}"></div>`;
			}
			$("#popup-congrats .prize-container").html(innerHTML);
			if (listPrize.length > 1) {
				$("#popup-congrats .prize-container").attr("multiple", "");
			} else {
				$("#popup-congrats .prize-container").removeAttr("multiple");
			}

			setTimeout(function () {
				$("#effect").removeClass("animating");
				var characterName = displayPrize.characterImg
				// var characterName = test[Math.floor(Math.random() * test.length)];
				var listItem = $(`.key-${characterName}`);
				var itemIndex =
					listItem.length > 1 ? listItem[randomInRange(0, 1)].id.slice(5) : listItem[0].id.slice(5);
				var prizeIndex = itemIndex;
				var order = -1;
				var rounds = 4;
				let speed = 50;
				(function linearLoop(i) {
					setTimeout(function () {
						$("#effect .effect__item").removeClass("active");
						order++;

						if (items[order] === undefined) {
							order = 0;
						}

						var getitem = items[order].attr("id").slice(5);
						console.log(getitem);

						items[order].addClass("active");
						if (order == prizeIndex - 1) rounds--;
						if (rounds) linearLoop(i);
						else {
							setTimeout(function () {
								// recieve prize
								$("#popup-congrats").addClass("active");
								items[order].addClass("active");
								console.log(`ban da trung item ${$("#effect .effect__item").eq(order).attr("id")}`);
							}, 600);
						}
					}, speed);
				})(99);
			}, 0);
		},
		callback: function () {},
	});

	const danhSachSwiper = $("#danhSachSwiper").initSwiper({
		swiperOptions: {
			direction: "vertical",
			slidesPerView: 7,
			scrollbar: {
				el: "#danhSachSwiper .swiper-scrollbar",
				draggable: true,
				dragSize: 4,
			},
		},
	});

	// write code to check if user sign in or not later
	$this.find(".signin-btn").attr("data-popup", "");
	$this.find(".signin-btn").on("click", function (event) {
		if (typeof $(this).attr("data-popup") === "undefined" || $(this).attr("data-popup") === false) {
			$(this).html("Đăng Nhập");
			$(this).attr("data-popup", "");
			event.stopImmediatePropagation();
		}
	});

	const animNameMq5 = "animate__fadeInLeft";
	scrollWatch.init({
		el: "#mq5-scrollWatch",
		options: {
			watch: "#mq5-scrollWatch",
			scrollThrottle: 300,
			onElementInView: function (e) {
				$("#mq5-scrollWatch").addClass("animate__animated");
				$("#mq5-scrollWatch").addClass(animNameMq5);
				setTimeout(() => {
					$("#mq5-scrollWatch").removeClass("animate__animated");
					$("#mq5-scrollWatch").removeClass(animNameMq5);
				}, 3000);
			},
			onElementOutOfView: function (e) {
				$("#mq5-scrollWatch").removeClass("animate__animated");
				$("#mq5-scrollWatch").removeClass(animNameMq5);
			},
		},
	});

	const animNameDanhSach = "animate__fadeInRight";
	scrollWatch.init({
		el: "#danhSach-scrollWatch",
		options: {
			watch: "#danhSach-scrollWatch",
			scrollThrottle: 300,
			onElementInView: function (e) {
				$("#danhSach-scrollWatch").addClass("animate__animated");
				$("#danhSach-scrollWatch").addClass(animNameDanhSach);
				setTimeout(() => {
					$("#danhSach-scrollWatch").removeClass("animate__animated");
					$("#danhSach-scrollWatch").removeClass(animNameDanhSach);
				}, 3000);
			},
			onElementOutOfView: function (e) {
				$("#danhSach-scrollWatch").removeClass("animate__animated");
				$("#danhSach-scrollWatch").removeClass(animNameDanhSach);
			},
		},
	});
});
