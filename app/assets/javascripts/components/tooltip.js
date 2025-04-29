/*
* This is jQuery written in the plugin style.
*
* In my personal experience, this style is rarely used in the wild
* except for library development.
* Instead, the behavior hook is predominant, at least in Rails projects.
* */
;(function($) {
  $.fn.tooltip = function() {
    return this.each(function() {
      const element = $(this);
      const tooltipText = element.data('tooltip');

      if (!tooltipText) return;

      element
        .on('mouseenter', function() {
          $('<div class="tooltip__window">')
            .text(tooltipText)
            .css({
              top: element.offset().top - 30,
              left: element.offset().left,
            })
            .appendTo('body');
        })
        .on('mouseleave', function() {
          $('.tooltip__window').remove();
        });
    });
  };
})(jQuery);
