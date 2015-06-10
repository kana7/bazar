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
	window.location = 'sql.exe?SqlDB=bazar&Sql=Search.phs&category=' + id;	
}

function getMoreBazarItems(page, container, id) {
	window.location = 'sql.exe?SqlDB=bazar&Sql=Search.phs&category=' + id + '&page=' + page;
}

function showHideCategory(id) {
	var element = $('#' + id);
	/* */
	element.show();
	element.parents('.sub_categories').show();
}