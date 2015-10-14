$(document).ready(function(){


// Scroll to

	var h = $(window).height();

	$('a.go__link').click(function (event) { 
		event.preventDefault();
	 elementClick = $(this).attr("href");
	 destination = $(elementClick).offset().top;
	   $('body,html').animate( { scrollTop: destination }, 671 );
	 return false;
	});


});