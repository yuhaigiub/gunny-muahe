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
});
