(function ($) {
  Drupal.behaviors.swmTheme = {
    attach: function (context, settings) {
      $(".show-form").click(function(){
        $(".panel-pane.pane-block.pane-formblock-topic-child").slideToggle(1800);
      });

      $('#colorbox header a').contents().unwrap();

      $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 20) {
          $('#navbar').addClass('fixed');
        } else {
            $('#navbar').removeClass('fixed');
        }
      });
    }
  };
})(jQuery);