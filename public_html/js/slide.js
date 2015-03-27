/*
 * LOL Javascript (Slide effect)
 */

/* 5 sets of panels possible on one page */
var counter = new Array(5);

/* positioning panels */
function initPanels(panels, className) {
	var margin = 0;
	/* */
	$('.' + className).each(function() {
		$(this).css('margin-left', margin + '%');
		margin += 100;
	});
	/* */
	counter[panels] = 0;
}

/* slide all panels to the left; showing the next panel */
/* moreLeft - finepositioning; add additional margin-left to panels */
function nextPanel(panels, className, moreLeft) {
	if (counter[panels] < ($('.' + className).length - 1))
	{
		$('.' + className).each(function() {
			$(this).delay(50).animate({
				left: '-=100%'
			}, 'slow');
		});
		/* */
		counter[panels] += 1;
	}
	else if (counter[panels] == ($('.' + className).length - 1))
	{
		$('.' + className).each(function() {
			$(this).delay(50).animate({
				left: moreLeft + '%'
			}, 'slow');
		});
		/* */
		counter[panels] = 0;
	}
	else
		return false;
}

/* slide all panels to the right; showing the previous panel */
function previousPanel(panels, className) {
	if (counter[panels] > 0)
	{
		$('.' + className).each(function() {
			$(this).delay(50).animate({
				left: '+=100%'
			}, 'slow');
		});
		/* */
		counter[panels] -= 1;
	}
	else if (counter[panels] == 0)
	{
		$('.' + className).each(function() {
			$(this).delay(50).animate({
				left: '-=' + ($('.' + className).length - 1) + '00%'
			}, 'slow');
		});
		/* */
		counter[panels] = ($('.' + className).length - 1);
	}
	else
		return false;
}

/* jump to different panel */
/* index - index of desired panel */
function goPanel(panels, className, index) {
	$('.' + className).each(function() {
		$(this).delay(50).animate({
			left: '-' + (index-1) + '00%'
		}, 'slow');
	});
	/* */
	counter[panels] = (index-1);
}