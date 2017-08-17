
$(document).ready(function(){
    
    $("#pop").css({
        "display": "none"
    });
//    Starting Look
    
    $("#cook").on("click", function(){
        
        $("#cook").css({
            "display": "none"
        });
        
        $("#pop").css({
            "display": "block"
        });
    }); 
//    End Start Button÷
    
    $("#concepts").css({
        "display": "none"
    });
    
    $("#next").on("click", function(){
        $("#langs").css({
            "display": "none"
        });
        $("#concepts").css({
            "display": "block"
        });
        $("#next").css({
            "display": "none"
        });
        
    });
    
});