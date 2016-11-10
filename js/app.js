(function($) {
	$('[data-toggle="tooltip"]').tooltip();

	// handle links with @href started with '#' only
	$(document).on('click', 'a[href^="#"]', function(e) {
		// target element id
		var id = $(this).attr('href');

		// target element
		var $id = $(id);
		if ($id.length === 0) {
			return;
		}

		// prevent standard hash navigation (avoid blinking in IE)
		e.preventDefault();

		// top position relative to the document
		var pos = $(id).offset().top;

		// animated top scrolling
		$('body, html').animate({scrollTop: pos});
	});
	
	$('.typed').typed({
		strings: ["bring ideas to life.", "build your web presence.", "dream in code.", "are Renderbit."],
		typeSpeed: 0.5,
		cursorChar: "|",
		backDelay: 1500,
		backSpeed: 0.5,
		startDelay: 500,
		loop: true
	});
})(jQuery);