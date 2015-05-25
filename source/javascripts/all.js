//= require_tree .

$(document).ready(function() {
  // Mobile banner toggling
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

  // Load recent news to the front page
  if ($.contains(document.body, $("#js-news")[0])) {
    $.get("news.html", function(data) {
      var vdom = $('<section></section>'),
          $dom_entry = $("#js-news"),
          max_articles = 8,
          num_articles,
          $articles;

      vdom.html(data);
      $articles = $(".news > article", vdom);
      num_articles = $articles.length;

      $articles.each(function(i) {
        if (i < max_articles) {
          var $date = $(".date", this),
              $title = $(".title", this),
              $output = $('<article class="news-articles"></article>'),
              link = "<a href='news.html#" + this.id + "' class='js-news-links'></a>";

          $title.wrap(link);
          $title = $(".js-news-links", this);
          $output.append($date).append($title);
          $dom_entry.append($output);
        }
      });
    });
  }

  // Enable table functionality on the publications page
  if ($.contains(document.body, $("#js-publications")[0])) {
    $(function () { $("#js-publications").footable({
        addRowToggle: false
      });
    });
  }
});
