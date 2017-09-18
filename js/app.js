$(document).ready(function(){
    
//-----------------------------------------------------
    
//    Intro Div
    $("#wrapper").css({
        "display": "block"
    });
    
    $("#pop").css({
        "display": "block"
    });
    
    $("#enter").on("click", function(){
        $("#wrapper").css({
            "display": "none"
        })
    })
    
//-----------------------------------------------------    
    
//    Starting Look
    $("#cook").on("click", function(){
        
        $("#cook").css({
            "display": "none"
        });
        
        $("#pop").css({
            "display": "block"
        });
    }); 
    
//----------------------------------------------------- 
    
//    End Start Button
    $("#concepts").css({
        "display": "none"
    });