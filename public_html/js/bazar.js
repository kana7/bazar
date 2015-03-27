$(window).load(function () {
	resizeAllImages();
});

$(document).ready(function() {
	
	$('#list').click(function(event){
		event.preventDefault();
		$('#search_result_content .item').addClass('list-group-item');
		$('#search_result_content').addClass("list-group-style2").removeClass("list-group-style1");
	});
	$('#grid').click(function(event){
		event.preventDefault();
		$('#search_result_content').addClass("list-group-style1").removeClass("list-group-style2");
		$('#search_result_content .item').removeClass('list-group-item');
		$('#search_result_content .item').addClass('grid-group-item');
	});
	
});

function showHideCategory(id) {
	
	var element = $('#' + id);
	/* */
	if(element.css('display') == 'none')
		$('#' + id).show();
	else
		$('#' + id).hide();
	
}

function resizeAllImages() {
	
	$('.bazar_image').each(function() {
		
		var element = $(this);
		var container = element.parent();
		var width = element.width();
		var height = element.height();
		var containerWidth = container.width();
		var containerHeight = container.height();
		
		if (height >= width) {
			element.addClass('fillHeight');
		} else {
			element.addClass('fillWidth');
		}
		
		var newWidth = element.width();
		var newHeight = element.height();
		
		if (newHeight > containerHeight) {
			
			element.removeClass('fillWidth');
			element.addClass('fillHeight');
			
		} else if (newWidth > containerWidth) {
			
			element.removeClass('fillHeight');
			element.addClass('fillWidth');
			
		}
		
	});
	
}

function getBazarItems(element, container, id) {
	
	$('.selectedCategory').removeClass('selectedCategory');
	element.addClass('selectedCategory');
	$.ajaxSetup({
		'beforeSend' : function(xhr) {
			xhr.overrideMimeType('text/html; charset=windows-1252');
		},
	});
	$('#' + container).load('sql.exe?SqlDB=bazar&Sql=loadAnnonces.phs&_cat=' + id, function() {
		resizeAllImages();
	});
	
}