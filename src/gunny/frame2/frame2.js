import scrollWatch from "../../setup/js/_scrollWatch.2";

$(document).on("gunny_frame2 rendered", {}, function (event, uniqueId) {
	const $this = $(uniqueId);

	const rankingSwiper = $("#rankingSwiper").initSwiper({
		swiperOptions: {
			slidesPerView: 3,
			navigation: {
				prevEl: ".swiper-button-prev--rankingSwiper",
				nextEl: ".swiper-button-next--rankingSwiper",
			},
			breakpoints: {
				769: {
					slidesPerView: 4,
				},
			},
		},
	});

	const isTerminating = [false, false, false];
	$(".ranking-top").each(function (index, el) {
		const elementId = "#" + $(el).attr("id");
		scrollWatch.init({
			el: elementId,
			options: {
				watch: elementId,
				scrollThrottle: 200,
				onElementInView: function (e) {
					if (index === 1) console.log(elementId + " in view");
					$(el).addClass("animate__animated");
					$(el).addClass("animate__fadeInUp");
					if (!isTerminating[index]) {
						isTerminating[index] = true;
						setTimeout(() => {
							$(el).removeClass("animate__animated");
							$(el).removeClass("animate__fadeInUp");
							isTerminating[index] = false;
						}, 1000);
					}
				},
				onElementOutOfView: function (e) {},
			},
		});
	});
});
