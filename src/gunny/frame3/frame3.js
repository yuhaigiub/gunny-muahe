import {dndPromotion} from "../../setup/js/_promotion";
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
		length: 8,
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
			const prizes = ["A", "B", "C", "D", "E", "F", "G", "H"];

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
				var characterName = displayPrize.characterImg;
				var listItem = $(`.key-${characterName}`);
				var itemIndex =
					listItem.length > 1 ? listItem[randomInRange(0, 1)].id.slice(5) : listItem[0].id.slice(5);
				var prizeIndex = parseInt(itemIndex);

				// change
				const minSpeed = 50;
				const start = 0;
				const rounds = 3;

				// don't change
				let speed = minSpeed;
				let order = start - 1;
				let steps = rounds * prizes.length + (prizeIndex - start);
				let currentStep = 0;

				function timeout(ms) {
					return new Promise((resolve) => setTimeout(resolve, ms));
				}

				async function wait(ms, callback) {
					await timeout(ms);
					callback();
				}

				// write change active class logic here
				function executeLoop() {
					$("#effect .effect__item").removeClass("active");
					order++;

					if (items[order] === undefined) {
						order = 0;
					}

					var getitem = items[order].attr("id").slice(5);
					items[order].addClass("active");
				}

				function afterLoop() {
					$("#popup-congrats").addClass("active");
					items[order].addClass("active");
					console.log(`ban da trung item ${$("#effect .effect__item").eq(order).attr("id")}`);
				}

				// magic
				async function linearLoopControl() {
					while (currentStep < steps) {
						await wait(speed, () => {
							currentStep++;
							executeLoop();
							speed += 0.1 * speed;
						});
					}
					await wait(600, afterLoop);
				}

				linearLoopControl();
			}, 0);
		},
		callback: function () {},
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

	let isTerminatingMq5 = false;
	const animNameMq5 = "animate__fadeInLeft";
	scrollWatch.init({
		el: "#mq5-scrollWatch",
		options: {
			watch: "#mq5-scrollWatch",
			scrollThrottle: 300,
			onElementInView: function (e) {
				$("#mq5-scrollWatch").addClass("animate__animated");
				$("#mq5-scrollWatch").addClass(animNameMq5);
				if (!isTerminatingMq5) {
					isTerminatingMq5 = true;
					setTimeout(() => {
						$("#mq5-scrollWatch").removeClass("animate__animated");
						$("#mq5-scrollWatch").removeClass(animNameMq5);
						isTerminatingMq5 = false;
					}, 1000);
				}
			},
			onElementOutOfView: function (e) {},
		},
	});

	let isTerminatingDanhSach = false;
	const animNameDanhSach = "animate__fadeInRight";
	scrollWatch.init({
		el: "#danhSach-scrollWatch",
		options: {
			watch: "#danhSach-scrollWatch",
			scrollThrottle: 300,
			onElementInView: function (e) {
				$("#danhSach-scrollWatch").addClass("animate__animated");
				$("#danhSach-scrollWatch").addClass(animNameDanhSach);
				if (!isTerminatingDanhSach) {
					isTerminatingDanhSach = true;
					setTimeout(() => {
						$("#danhSach-scrollWatch").removeClass("animate__animated");
						$("#danhSach-scrollWatch").removeClass(animNameDanhSach);
						isTerminatingDanhSach = false;
					}, 1000);
				}
			},
			onElementOutOfView: function (e) {},
		},
	});
});
