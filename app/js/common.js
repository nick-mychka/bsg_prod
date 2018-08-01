$(function() {

	$('.reviews-carousel').flickity({
		adaptiveHeight: true,
		contain: true,
		lazyLoad: 2
	});

	$(".hamburger").on("click", function() {

		$(this).addClass("is-active");
		$(".burger-list").addClass("menu-active");
		$(".close-overlay").css("display", "flex").hide().fadeIn(500);

	});

	$(".close-overlay").on("click", function() {

		
		$(".hamburger").removeClass("is-active");
		$(".burger-list").removeClass("menu-active");
		$(this).fadeOut(500);

	});


	// $(window).on("scroll resize", function() {
		
	// 	if ($(".hamburger").hasClass("is-active")) {
	// 		$(".hamburger").removeClass("is-active");
	// 		$(".nav-list").slideUp(500);
	// 	}
	// });

});
