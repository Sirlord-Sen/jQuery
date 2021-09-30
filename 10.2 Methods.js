//text()//

// This is the method that selects the text just like textContent in JS
$('h1').text();

// passing an argument inside changes the text
$('h1').text("Jesus is Lord!!!");

//if you pass in an argument to a list of items, it would apply to all. Just like using for loop in JS

$('li').text("Rusty, is the only ,and greatest dog!!!");

//html()//

// This works like the innerHTML element.
$("ul").html();

//Passing an argument inside takes HTML form
$('ul').html("<li>I hacked into your list</li><li>Rusty is still adorable</li>");

//if you pass in an argument to a list of items, it would apply to all. Just like using for loop in JS
$('li').html("<a href='google.com'>CLICK ME TO GOOGLE</a>");

//attr()//

// to retrieve or set the attribute
//$('input').attr('type', 'color');

//val()//

// This is used to grab the value of the input
$('input').val();
// You can also change the input by passing in the value.

//addClass()//
//removeClass()//
//toggleClass()//

























