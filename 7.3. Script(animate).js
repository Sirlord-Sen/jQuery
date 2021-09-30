$(function(){
    $('#up').click(function(){
        $('.box').animate({
            top:"-=40px",
            opacity:"+=.02px"
        }, function(){
        
        });
    });
    
    $('#right').click(function(){
        $('.box').animate({
            left:"+=40px",
            fontSize:"-=1px"
        }, function(){
        
        });
    });
    
    $('#down').click(function(){
        $('.box').animate({
            top:"+=40px",
            opacity:"-=0.2px"
        }, function(){
        
        });
    });
    
    $('#left').click(function(){
        $('.box').animate({
            left:"-=40px",
            fontSize:"+=1px"
        }, function(){
        
        });
    });
});