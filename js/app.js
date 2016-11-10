(function($) {
	$("#home-wrapper").backstretch([
		"img/slide-4.jpg",
		"img/slide-1.jpg",
		"img/slide-2.jpg",
		"img/slide-3.jpg"
	], {
		fade: 1000
	});
	
	$("#home-wrapper").backstretch("pause");
	
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
	
	$('textarea').autogrow();
	
	$('.typed').typed({
		strings: ["bring ideas to life.", "build your web presence.", "dream in code.", "are Renderbit."],
		typeSpeed: 1,
		cursorChar: "|",
		backDelay: 1500,
		backSpeed: 1,
		startDelay: 500,
		loop: true,
		preStringTyped: function() {
			$("#home-wrapper").backstretch("next");
		}
	});

	var flag = false;
	$('#home-wrapper').on("backstretch.after", function (e, instance, index) {
		if(!flag && index == 1) {
			flag = true;
			$('.loader').remove();
			$('body').toggleClass('no-overflow');
		}
	});
})(jQuery);