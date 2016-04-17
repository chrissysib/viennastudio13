$(document).ready(function() {

	// translate quotes 
	$('.pullquote').hover(translate);

	function translate() {
		$('.pullquote span').toggleClass('hide');
	};

	// navigation hover 
	$('ul a').mouseenter(showNavItem);

	function showNavItem() {
		$(this).find('span').toggleClass('hide');
	};

	$('ul a').mouseleave(showNavItem);

	// $('.navItem').mouseenter(showNavItem);

	// function showNavItem() {
	// 	$(this).find('span').toggleClass('hide');
	// }
	// $('.navItem').mouseleave(showNavItem);

});