$(document).ready(function(){


// Scroll to

	$('a.header-down__link').click(function (event) { 
		event.preventDefault();
	 elementClick = $(this).attr("href");
	 destination = $(elementClick).offset().top;
	   $('body,html').animate( { scrollTop: destination }, 600 );
	 return false;
	});

});