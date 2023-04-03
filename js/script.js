$(document).ready(function () {
	$('.top-header__burger').click(function (event) {
		$('.top-header__burger,.top-header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});
const swiper = new Swiper('.build-block__body,.technologies-block__wrapper,.process-block__body', {
	// Optional parameters
	slidesPerView: 4,
	speed: 500,
	loop: true,
	spaceBetween: 11,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
		},
		840: {
			slidesPerView: 3,
		},
		// when window width is >= 640px
		1024: {
			slidesPerView: 4,

		}
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.build-block__swiper-button-next,.technologies-block__swiper-button-next,.process-block__swiper-button-next',
		prevEl: '.build-block__swiper-button-prev,.technologies-block__swiper-button-prev,.process-block__swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});