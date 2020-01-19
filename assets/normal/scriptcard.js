$(document).ready(function(){

	// Lift card and show stats on Mouseover
	$('.p1').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext, div.carouselPrev').addClass('visible');
		 }, function(){
			$(this).removeClass('animate');
			$('div.carouselNext, div.carouselPrev').removeClass('visible');
	});


});
