//size of viewport
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[ a + 'Width' ], height: e[ a + 'Height' ]};
}

function getViewportClass() {
    if (viewport().width >= 1170){
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
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();