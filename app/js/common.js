$(function() {

	/* ........... Prevent drag on the links and images ........... */

	$("img, a").on("dragstart", function(event) { 
		event.preventDefault(); 
	});


	/* ........... Set up a carousel plugin Flickity ........... */

	$('.reviews-carousel').flickity({
		adaptiveHeight: true,
		contain: true,
		lazyLoad: 2
	});


	/* ...........  Set up a Smooth scroll  ........... */

	var $root = $('html, body');
	$('.smooth-scroll-on-js a[href^="#"]').on('click', function(event) {
		$root.animate({
			scrollTop: $('[data-name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 20
		}, 700);
		return false;
	});


	/* ........... Settings the open/close burger menu ........... */

	var hamburger = $(".hamburger"),
		burgerList = $(".burger-list"),
		closeOverlay = $(".close-overlay");


		// Menu will open

	$(".hamburger").on("click", function() {
		$(this).addClass("is-active");
		burgerList.addClass("menu-active");
		closeOverlay.css("display", "flex").hide().fadeIn(500);

	});


		// Menu will close

	$(".close-overlay, .burger-list ul li a").on("click", closeMenu);
	$(".burger-list ul li a").on("click", closeMenu);

	function closeMenu() {
		hamburger.removeClass("is-active");
		burgerList.removeClass("menu-active");
		closeOverlay.fadeOut(500);
	}

	
	// Telegram Ajax Send
	
	$("form.callback").submit(function() { 
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


	// $("#header").on('scroll', function(){
	// 	var destination = $("#about-us").offset().top;
 //            $('html').animate({ scrollTop: destination }, 900);
 //        return false;
	// });


});
