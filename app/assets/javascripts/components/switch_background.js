;$(function () {
  "use strict";

  const colorClasses = ["bg-red", "bg-blue", "bg-green", "bg-yellow"]
  const root = $("[data-js='switch-background']");
  const body = $("body");
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
