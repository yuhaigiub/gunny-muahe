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

	$(".ranking-top").each(function (index, el) {
		const elementId = "#" + $(el).attr("id");
		scrollWatch.init({
			el: elementId,
			options: {
				watch: elementId,
				scrollThrottle: 100, 
				onElementInView: function (e) {
					$(el).addClass("animate__animated");
					$(el).addClass("animate__fadeInUp");
					setTimeout(() => {
						$(el).removeClass("animate__animated");
						$(el).removeClass("animate__fadeInUp");
					}, 3000);
				},
				onElementOutOfView: function (e) {
					$(el).removeClass("animate__animated");
					$(el).removeClass("animate__fadeInUp");
				},
			},
		});
	});

	
});
