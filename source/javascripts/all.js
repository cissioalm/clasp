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
});
