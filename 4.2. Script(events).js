$('#box').click(function(){
    
   alert('You just clicked the box!'); 
    
});

$('input').blur(function(){
    
    if( $(this).val()== "" ){
        $(this).css('border', 'solid 2px red');
        $('#box').text('Forgot to enter a text');
    };
    
});

$('input').keydown(function(){
    if( $(this).val() !== "" ){
        $(this).css('border','solid 2px green')
        $('#box').text('Thanks for that!');
    };
})

$('#box').hover(function(){
    $(this).text('you hovered!');
    
}, function(){
    $(this).text('you hovered out!');
    
} );    