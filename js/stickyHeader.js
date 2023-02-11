$(document).ready(function (){

	var fixedHeader = $('#fixedheader');

	$(window).on('scroll', function () {
		
		var proyectosoffsetTop = $('#proyectos').offset().top;

		if ($(window).scrollTop() >= proyectosoffsetTop) {
			fixedHeader.css('margin-top', 0);
		}else if ($(window).scrollTop() <= proyectosoffsetTop/2) {
			fixedHeader.css('margin-top', '-68px');
		}
	});
});








































