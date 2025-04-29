;$(function () {
  "use strict";

  const root = $("[data-js='switch-background']");
  const body = $("body");
  /*
  * When using jQuery, you often use the DOM to store state.
  * You can also store it in a const/variable as demonstrated here.
  *
  * This can be useful when the state is complex.
  * */
  const state = {bgColor: "bg-blue"}

  root.on('click', function() {
    state.bgColor = nextColor()
    render()
  });

  function nextColor() {
    const currentColor = state.bgColor
    return colorClasses[(colorClasses.indexOf(currentColor) + 1) % colorClasses.length]
  }

  function render() {
    body.removeClass(colorClasses.join(" "))
    body.addClass(state.bgColor)
  }

  render()
});
