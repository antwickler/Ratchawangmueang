// Google Analytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-23216507-1', 'auto');
ga('send', 'pageview');


// Disable click right
document.oncontextmenu = new Function("return false;");


// Disable F12 options
document.onkeypress = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}


// Disable ctrl+c, ctrl+u, ctrl+shift+i
jQuery(document).ready(function ($) {
  $(document).keydown(function (event) {
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
      return false;
    }
    else if (event.shiftKey && (pressedKey == "i")) {
      return false;
    }
  });
});