$(function(){
    
    //$('h1').hide();
    //$('div.hidden').show();
    
    // Here, you could fadeIn,fadeOut, show, hide, fadeto 
    
    //This is the fadeto. 
    $('#box1').click(function(){
        $(this).fadeTo(1000, 0.25, function(){
            //animation is complete.
        });
    });
    
    // you chould also do slideup or slidedown. 
    
    // You could also do toggle like this.
    $('button').click(function(){
        $('div.hidden').slideToggle();
    });
    
    $('h1').show
    
});


