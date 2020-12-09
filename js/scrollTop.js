//Author: Julkar N. Nahian
//URL: www.jnahian.com
//Email: nahian048@gmail.com


$(document).ready(function () {
	$('#scrollTop').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('#scrollTop').fadeIn(500);
		} else $('#scrollTop').fadeOut(500);
	});
	$('#scrollTop').click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});