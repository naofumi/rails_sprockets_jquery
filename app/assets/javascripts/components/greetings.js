;$(function () {
  "use strict";

  const root = $("[data-js='greetings']");

  root.on('click', function() {
    alert("Hello, world!")
  });
});
