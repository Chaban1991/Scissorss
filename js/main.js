$(document).ready(function(){


// Scroll to

	$('a.header-down__link').click(function (event) { 
		event.preventDefault();
	 elementClick = $(this).attr("href");
	 destination = $(elementClick).offset().top;
	   $('body,html').animate( { scrollTop: destination }, 600 );
	 return false;
	});

	
	$('.pag__item').on('click', function(e) {
	 	e.preventDefault();

	 	var
	 		$this = $(this),
	 		container = $this.closest('.services__content'),
	 		list = container.find('.info__wrap'),
	 		item = container.find('.info__text'),
	 		activeSlide = item.filter('.info-active'),
	 		nextSlide = activeSlide.next(),
	 		prevSlide = activeSlide.prev(),
	 		firstSlide = item.first(),
	 		lastSlide = item.last(),
	 		sliderOffset = list.offset().left,
	 		icon = container.find('.services__icon'),
	 		activeIcon = icon.filter('.services-active'),
	 		nextActive = activeIcon.next(),
	 		prevActive = activeIcon.prev(),
	 		reqPos = 0;

		if ($(this).hasClass('pag__right')) {
			if (nextSlide.length) {

				reqPos = nextSlide.offset().left - sliderOffset;

				nextSlide.addClass('info-active').siblings().removeClass('info-active');

				nextActive.addClass('services-active').siblings().removeClass('services-active');
			} else {
				return false;
			}

		} else {
			if (prevSlide.length) {

				reqPos = prevSlide.offset().left - sliderOffset;

				prevSlide.addClass('info-active').siblings().removeClass('info-active');

				prevActive.addClass('services-active').siblings().removeClass('services-active');
			} else {
				return false;
			}

		}
	 	
	 	list.css('left','-' + reqPos +'px');

	 });
	
	var size = 370,
    newsContent = $('.info__text'),
    i = 0;
    

    for (i = 0; i < newsContent.length; i++) {
    	newsText = newsContent.eq(i).text();

		if(newsText.length > size){
			newsContent.eq(i).text(newsText.slice(0, size) + ' ...');
		}

			console.log(newsContent.eq(i).text().length);
	}	



});


