$(function(){
    $('.name p>img').mouseover(function(){
        $(this).removeClass('opa');
    }).mouseout(function(){
        $(this).addClass('opa');
    })

    $('.name p>img').click(function(){
        if($(this).hasClass("current")){
            $(this).removeClass("current")
            .siblings().removeClass('current');
        }else{
            $(this).addClass("current")
            .siblings().removeClass('current');    
        }
    }) 

    $(".user-msg").keydown(function () {  
        var max = 140;  
        var value = $(this).val();  
        var coun = $(".num");  
        if (value.length > max) {  
            $(this).val(value.substring(0, max));  
            coun.html(0);  
        } else {  
            coun.html(max - value.length);  
        }  
    }).keyup(function () {  
        var max = 140;  
        var value = $(this).val();  
        var coun = $(".num");  
        if (value.length > max) {  
            $(this).val(value.substring(0, max));  
            coun.html(0);  
        } else {  
            coun.html(max - value.length);  
        }  
    }); 

    $(".part").hover(function() {
        $(".del").css('display', 'block');
    }, function() {
    $(".del").css('display', 'none');
    });

    $('btn').click(function(){
        
    })


    

    

})

