import { dndPromotion } from "../../setup/js/_promotion";

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
	const $this = $(uniqueId);

	const items = [1, 2, 3, 4, 5, 6, 7, 8].map((index) => $(`#effect .effect__item#item-${index}`).eq(0));
	console.log(items);
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

			setTimeout(function () {
				$("#effect").removeClass("animating");
				var characterName = displayPrize.characterImg;
				var listItem = $(`.key-${characterName}`);
				var itemIndex =
					listItem.length > 1 ? listItem[randomInRange(0, 1)].id.slice(5) : listItem[0].id.slice(5);
				var prizeIndex = itemIndex;
				var order = -1;
				var rounds = 2;
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
								$("#effect .effect__item").removeClass("active");
								$("#action").removeClass("off");
								$(".popup__wrapper--reward").show();
								$(".render__item").hide();
								$("#effect").addClass("animating");
								items[order].addClass("active");
								console.log(`ban da trung item ${$("#effect .effect__item").eq(order).attr("id")}`);
							}, 600);
						}
					}, 200);
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
});
