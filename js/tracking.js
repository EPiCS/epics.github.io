$(document).ready(function() {
  $("a.track").click(function() {
    var prefix = "link/"
    var msg = $(this).attr("href");
    re = /^(\w+):\/\//;
    tracking_url = msg.replace(re,"$1/");
    _gaq.push(['_trackPageview', prefix + tracking_url]);
//    pageTracker._trackPageview(prefix + tracking_url);
  });
});
