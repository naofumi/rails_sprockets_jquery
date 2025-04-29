/*
* Note the `;$(function () {` at the top of the file.
* This is a common idiom with jQuery/Sprockets.
*
* Since Sprockets simply concatenates JavaScript files, the ";"
* prevents misinterpretation by the browser when the programmer omitted ";" from line ends.
*
* `$(...)` is essentially the same as
* `document.addEventListener('DOMContentLoaded', ...)`
* and runs the surrounded code block after the DOM has loaded.
*
* With ES modules, they are unnecessary since modules are always loaded
* after the DOM is ready.
* */

;$(function () {
  /*
  * ES modules always run in strict mode so this becomes
  * unnecessary with the ES module version.
  * */
  "use strict";

  const root = $("[data-js='greetings']");

  root.on('click', function() {
    alert("Hello, world!")
  });
});
