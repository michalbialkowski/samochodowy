let lastScroll = 0;
let scrollMargin = 75;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	
	if (currentScroll <= 0) {}
	
	if (currentScroll > lastScroll && currentScroll > scrollMargin) {
		$('.fixed-top').addClass('abovetop');
		$('.fixed-bottom').addClass('underbottom');
	} else if (currentScroll < lastScroll && currentScroll > scrollMargin) {
		$('.fixed-top').removeClass('abovetop');
		$('.fixed-bottom').removeClass('underbottom');
	}
	
	lastScroll = currentScroll;
});