$(function() {
	var $slider = $("#exp-slider");
	// demo slide clone
	var slideHtml = $slider.html();
	$slider
	  .append(slideHtml)
	  .append(slideHtml)
	  .append(slideHtml);
  
    // slick init
    $slider.slick({
	  infinite: true,
	  dots: true,
	  arrows: false
	});

	$(".js-next-slide").on("click",function( ) {
		$slider.slick('slickNext');
	});

	$(".js-prev-slide").on("click",function( ) {
		$slider.slick('slickPrev');
	});
});