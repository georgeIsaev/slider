$(function() {
	const carouselInner = $('.carousel-inner');
	var carousel = $('#carousel-example-generic');
	var slideId = [];
	var imgSrc = [];


	// Функция создания слайда
	function createSlideItem(src, caption) {
		carouselInner.append('<div class="item"> <img src="' + src + '" alt="" class="center-block"> <div class="carousel-caption">' + caption + '</div> </div>');
	};

	$.getJSON('js/dataSlide.json', function(data) {
		// Получаем массив из всех адресов картинок для слайдера
		// и и id
		$(data).each( function(index, value) {
			for (var id in data){
				slideId.push(id);
				imgSrc.push(data[id]);
			}
		});

		var index = window.location.pathname;
		index = index.substr(index.lastIndexOf('=') +1);

		for (var i = 0; i < slideId.length; i++) {
			var imgSrcLocale = imgSrc[i];

			if (slideId[i] == index){
				carousel.css('display', 'block');
				for (var j = 0; j < imgSrcLocale.length; j++) {
					createSlideItem(imgSrcLocale[j]);
				}
				
				$('.item:first-child').addClass('active');
			}
			
		}
  
	});
});