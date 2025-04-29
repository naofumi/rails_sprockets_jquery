/*
* Here we are using jQuery installed by Sprockets in app/assets/javascripts/application.js
*
* The Sprockets installation will expose jQuery as a global variable that
* can be used from ES modules.
* Note that this depends on which JavaScript file is loaded first by the browser.
*
* If your final goal is to use esbuild for all jQuery files, then you should
* probably reconsider relying on global variables and install jQuery separately
* as in app/javascript/jquery/switch_background.ts
*
* Also note that we do not need to wrap our code in $() so that it executes after
* the `ready` event. JavaScript modules will be loaded using the `type="module"`
* attribute on the script tag, which means that the browser knows that it should
* be executed after the DOM is loaded.
* */

const root = $("[data-js='greetings-es']");

root.on('click', function () {
  alert("Hello, world from ES modules!")
});
