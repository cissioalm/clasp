//= require_tree .

$(document).ready(function() {
  var menuToggle = $('#js-banner-mobile-menu').unbind();
  $('#js-banner-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-banner-menu').slideToggle(function(){
      if($('#js-banner-menu').is(':hidden')) {
        $('#js-banner-menu').removeAttr('style');
      }
    });
  });

  if ($.contains(document.body, $("#js-news")[0])) {
    $.get("news.html", function(data) {
      var vdom = $('<div></div>');
      vdom.html(data);
      console.log($(".news > article", vdom)[0]);
      $("#js-news").append($(".news > article", vdom)[0]);
    });
  }

  if ($.contains(document.body, $("#js-publications")[0])) {
    $(function () { $("#js-publications").footable(); });
  }
});
