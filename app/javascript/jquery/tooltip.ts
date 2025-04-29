/*
* We are using the global "$" jQuery object because we want to call `tooltipEs()`
* from the HTML file.
* */

$.fn.tooltipEs = function () {
  return this.each(function () {
    const element = $(this);
    const tooltipText = element.data('tooltip');

    if (!tooltipText) return;

    element
      .on('mouseenter', function () {
        $('<div class="tooltip__window">')
          .text(tooltipText)
          .css({
            top: element.offset()!.top - 48,
            left: element.offset()!.left,
          })
          .appendTo('body');
      })
      .on('mouseleave', function () {
        $('.tooltip__window').remove();
      });
  });
};
