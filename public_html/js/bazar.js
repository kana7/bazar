/*$(window).load(function () {
 resizeAllImages();
 });*/

$(document).ready(function () {

    $('#list').click(function (event) {
        event.preventDefault();
        $('#search_result_content .item').addClass('list-group-item');
        $('#search_result_content').addClass("list-group-style2").removeClass("list-group-style1");
    });
    $('#grid').click(function (event) {
        event.preventDefault();
        $('#search_result_content').addClass("list-group-style1").removeClass("list-group-style2");
        $('#search_result_content .item').removeClass('list-group-item');
        $('#search_result_content .item').addClass('grid-group-item');
    });

});

/*function resizeAllImages() {
 
 $('.bazar_image').each(function () {
 
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
 
 }*/

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
function resizeInput() {
    var left_width = (($('#bazarSearch_container_left').width() / $('#bazarSearch_container_left').parent().width()) * 100);
    var right_width = (($('#bazarSearch_container_right').width() / $('#bazarSearch_container_right').parent().width()) * 100);
    $('#bazarSearch_container_middle').width((99.5 - (left_width + right_width)) + '%');
}
function resizeOverlay() {
    var docHeight = $('#bazarBody').height();
    $("#overlay").height(docHeight);
}

function changeToMobile() {
    if (viewport().width < 992) {
        $('#sidebar').prependTo('#content');
        $('#bazarInputs').prependTo('#content');
        $('#bazar_footer').appendTo('#body');
    } else {
        $('#sidebar').prependTo('#bazarBody');
        $('#bazarInputs').insertAfter('#buttonList');
        $('#bazar_footer').appendTo('#wrap');
    }
}

function resizeSelect(element) {
    var ghost = $('<div id="width_tmp" style="display:none;"></div>');
    $('body').append(ghost);
    $("#width_tmp").html($('#' + element.attr('id') + ' option:selected').text());
    var new_width = $("#width_tmp").width();
    if (new_width > 100) {
        var paddingHigh = 30;
        var paddingLow = 20;
    } else {
        var paddingHigh = 40;
        var paddingLow = 30;
    }

    //conversion des tailles des containers du champ de recherche en pourcent
    var left_width = ((new_width + paddingHigh) / $('#bazarSearch_container_left').parent().width()) * 100;
    $('#bazarSearch_container_left').width(left_width + '%');
    resizeInput();
    ghost.remove();
}

function showProfil() {
    var element = $('#profil');
    /* */
    if (element.css('display') == 'none')
        element.css('display', 'inline-block');
}
function hideProfil() {
    var element = $('#profil');
    /* */
    if (element.css('display') != 'none')
        element.css('display', 'none');
}
function logout() {
    window.location.href = "sql.exe?SqlDB=bazar&Sql=Logout.phs";
}
function switchTo(page) {
    window.location.href = "sql.exe?SqlDB=bazar&Sql=" + page + ".phs";
}
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[ a + 'Width' ], height: e[ a + 'Height' ]};
}
function getViewportClass() {
    if (viewport().width >= 1170) {
        return 'lgdesk';
    } else if (viewport().width < 1172 && viewport().width >= 992) {
        return 'desk';
    } else if (viewport().width < 992 && viewport().width >= 680) {
        return 'tab';
    } else if (viewport().width < 680) {
        return 'phone';
    }
}
var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
});