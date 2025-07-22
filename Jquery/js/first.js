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



    //Your jquery code here
    console.log("We are using jQuery");
    // jQuery Syntax looks like this
    // $('selector').action()

    //clicks on all the p elements.
    // $('p').click(); //click on p
    // $('p').click(function () {
    //     console.log('you clicked on p', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // }); //do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // });
    // $('p').hover(function () {
    //     console.log('you hoverd on: ', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // },
    // function (){

    //     console.log('Thanks for coming')
    // });


    // there are three main types of selectors in jQuery 
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element selector -  This is an example of element selector which clicks on all p
    // $('p').click();

    // 2. Id selector - this is an example of id selector
    // $('#second').click();

    // 3. Class selector - this is an example of id selector
    // $('.odd').click();

    // other selectors
    // $('*').click() // clicks on all the elements
    // $('p.odd').click() // clicks on all the elements
    // $('p:first').click() // clicks on all the elements

    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    // demoing the on method
    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");

            }



        })

    // $('#wiki').hide(1000, function () {
    //     console.log("hidden");
    // })   
    // $('#wiki').show(1000, function () {
    //     console.log("show");
    // })  
    $('#but').click(function () {
        $('#wiki').fadeOut(5000);
    })

    //     fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // Slide methods - speed and callback parameters are optional
    // $('#wiki').slideUp(1000, function(){
    //     console.log('done');
    // })
    // $('#wiki').slideDown(1000)
    // $('#wiki').slideToggle(1000)

    // Animate function in jQuery
    // $('#wiki').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'

    // }, "fast")
    // $('#wiki').animate({ opacity: 0.3 }, 4000);
    // $('#wiki').animate({ opacity: 0.9 }, 1000);
    // $('#wiki').animate({ width: '350px' }, 12000);

    // $('#ta').val('setting it to harry');
    // $('#ta').html('setting it to harry');
    // $('#ta').html('setting it to harry3');
    // $('#inp').html('setting it to harry3');
    // $('#inp').val('setting it to harry3');
    // $('#inp').empty()
    // $('#wiki').empty()
    // $('#wiki').text('you are good')
    // $('#wiki').remove()

    //     $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')
    // $('#wiki').css('background-color', 'red')
    // $('#wiki').css('background-color')

    // AJAX Using jQuery
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });



