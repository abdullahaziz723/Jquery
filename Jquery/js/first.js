$(document).ready(function () {
  $("p").click(function () {
    console.log("Paragraph clicked!");
    $("p").css("color", "red");
    $(this).hide();
  });
});
//three main methods used:
//1. $(document).ready() - ensures the DOM is fully loaded before running the script
//2. $('p').click() - attaches a click event handler to all <p> elements
//3. $(this).hide() - hides the specific <p> element that was clicked

//there are three types of selectors in jQuery:
//1. Element Selector: selects elements by their tag name, e.g., $('p')
//2. Class Selector: selects elements by their class, e.g., $('.class-name')
//3. ID Selector: selects an element by its ID, e.g., $('#id-name

//jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation, event handling, and animation.
//It is designed to make things like HTML document traversal and manipulation, event handling, and animation
//easier with an easy-to-use API that works across a multitude of browsers.



///events in jquery are actions that occur in the browser, such as clicks, form submissions, or mouse movements.
//jQuery provides methods to handle these events, allowing developers to execute code in response to user
//interactions. Common event methods include .click(), .submit(), and .hover().
//jQuery is a JavaScript library that simplifies HTML document manipulation, event handling, and animation.
//It provides an easy-to-use API that works across different browsers, making it easier to write
//cross-browser compatible code. jQuery is widely used for its simplicity and efficiency in handling DOM manipulation and events.

// Mouse events = click ,dbcilick, mouseover, mouseout, mouseenter, mouseleave
// KeyboardEvent = keydown, keyup, keypress
// Form events = submit, change, focus, blur
// document/window EventSource = load, resize, scroll, unload


console.log($);
