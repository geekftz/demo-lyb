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

    

   
    function time(){
        var myDate = new Date();
        var year = myDate.getFullYear();//获取当前年
        var yue = myDate.getMonth()+1;//获取当前月
        var date = myDate.getDate();//获取当前日
        var h = myDate.getHours();//获取当前小时数(0-23)
        var m = myDate.getMinutes();//获取当前分钟数(0-59)
        var s = myDate.getSeconds();//获取当前秒 
        return yue
    }

    $('.btn').click(function(){
        var $parent=$('ul');
        var $src=$(".current").attr('src');
        var $part_img=$('<img src="" class="part-img">')
        var $p_1=$('.user-name').val();
        var $p_2=$('.user-msg').val();
        // var $time=$("year+'年'+yue+' 月'+date+' 日'+h+' 时'+m+' 分'+s+' 秒'");
        var $li=$('<li class="part"></li>');
        var $p1=$('<p class="user-pt"></p>');
        var $p2=$('<p class="time"></p>')
        var $p3=$('<p><a class="del">删除</a></p>');
        var $spa1=$('<span class="user-nm"></span>');
        var $spa2=$('<span class="user-ms"></span>');
        
        if($p_1!=""&&$p_2!=""){
            $part_img.attr('src',$src);
            $li.append($part_img);
            $spa1.append($p_1);
            $spa2.append($p_2);
            $p1.append($spa1,':',$spa2);
            $li.append($p1);
            $li.append($p2);
            $li.append($p3);
            $parent.append($li);
        }else{
            alert('请填写您的昵称和留言，谢谢')
        }
        

    })

    $('.del').click(function(){
        $(this).parent().parent().remove();
    })
    

    $(".part").hover(function() {
        $(".del").css('display', 'block');
    }, function() {
        $(".del").css('display', 'none');
    });

    

})

