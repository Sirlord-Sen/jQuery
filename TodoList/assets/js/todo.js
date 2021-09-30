// Where to check off specific Todos By Clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

// This is to remove the individual list
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
       $(this).remove(); 
    });
    // The event property was used to stop event bubbling
    event.stopPropagation();
});


//adding new items to the todo List
$('input[type = "text"]').on('keypress', function(event){
    if(event.which === 13){
        // grabing new tod text from input
        var todoText = $(this).val();
        // Clear input
        $(this).val('');
        // create a new li and add to ul
        if(todoText){
            $('ul').append("<li><span><img src='trash-alt.svg' width='15px'></span> " + todoText + "</li>");
        }
    }
});

//adding the input toggle effect
$('h1 span').on('click', function(){
   $('input[type = "text"]').slideToggle(); 
});