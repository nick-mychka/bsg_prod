$(function() {

	/* ........... Prevent drag on the links and images ........... */
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

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

	$(".burger-list ul li a").on("click", function() {

		
		$(".hamburger").removeClass("is-active");
		$(".burger-list").removeClass("menu-active");
		$(".close-overlay").fadeOut(500);

	});

	

		/* ........... Initialization and settings PageScroll2id plugin ........... */
	$("a[rel='m_PageScroll2id']").mPageScroll2id({});

	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "telegram.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find(".success").addClass('success-active').css("display", "flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find(".success").removeClass('success-active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	
	// $(window).on("scroll resize", function() {
		
	// 	if ($(".hamburger").hasClass("is-active")) {
	// 		$(".hamburger").removeClass("is-active");
	// 		$(".nav-list").slideUp(500);
	// 	}
	// });

});
