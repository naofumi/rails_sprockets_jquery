/*
* Here we are using jQuery installed via NPM.
* This is independent of the jQuery installed by Sprockets.
*
* You could also use the jQuery installed by Sprockets in app/assets/javascripts/application.js
* */
import $ from 'jquery'
import {esColorClasses} from './es_color_classes'

const root = $("[data-js='switch-background-es']");
const body = $("body");

/*
* When using jQuery, you often use the DOM to store state.
* You can also store it in a const/variable as demonstrated here.
*
* This can be useful when the state is complex.
* */
type State = { bgColor: typeof esColorClasses[number] }
const state: State = {bgColor: "bg-blue"}

root.on('click', function () {
  state.bgColor = nextColor()
  render()
});

function nextColor() {
  const currentColor = state.bgColor
  return esColorClasses[(esColorClasses.indexOf(currentColor) + 1) % esColorClasses.length]!
}

function render() {
  body.removeClass(esColorClasses.join(" "))
  body.addClass(state.bgColor)
}

render()
