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

    
    

    $('.btn').click(function(){
        
        var $parent=$('ul');
        var $src=$(".current").attr('src');
        var $part_img=$('<img src="" class="part-img">')
        var $p_1=$('.user-name').val();
        var $p_2=$('.user-msg').val();
        var $li=$('<li class="part"></li>');
        var $p1=$('<p class="user-pt"></p>');
        var $p2=$('<p class="time"></p>')
        var $p3=$('<p><a class="del">删除</a></p>');
        var $spa1=$('<span class="user-nm"></span>');
        var $spa2=$('<span class="user-ms"></span>');
        var $ti=$('<p class="time"></p>')
        if($p_1==""&&$p_2==""){
            alert('请填写您的昵称和留言，谢谢');
            return false;
        }
        if($p_1==""){
            alert('请填写您的昵称，谢谢');
            return false;
        }
        if($p_2==""){
            alert('请填写您的留言，谢谢');
            return false;
        }
        else{
            $part_img.attr('src',$src);
            $li.append($part_img);
            $spa1.append($p_1);
            $spa2.append($p_2);
            $p1.append($spa1,':',$spa2);
            $li.append($p1);
            $li.append($p2);
            $li.append($p3);
            $li.append($ti);
            function displayTime(){
                var date=new Date();
                var getYear=date.getFullYear();
                var getMonth=date.getMonth()+1;
                if(getMonth<10){
                    getMonth="0"+getMonth;
                }
                var getDate=date.getDate();
                var getHours=date.getHours();
                var getMinutes=date.getMinutes();
                var getSeconds=date.getSeconds();
                var times=getYear+"年"+getMonth+"月"+getDate+"日"+getHours+"时"+getMinutes+"分"+getSeconds+"秒";   
                return times;
            }
            $ti.append(displayTime());
            $parent.append($li);
            
        }
        
        $("ul>li").hover(function() {
            $(".del").css('display', 'block');
        }, function() {
            $(".del").css('display', 'none');
        });

        $('.del').click(function(){
            $(this).parent().parent().remove();
        })

    })

    $('.del').click(function(){
        $(this).parent().parent().remove();
    })
    

    $("ul>li").hover(function() {
        $(".del").css('display', 'block');
    }, function() {
        $(".del").css('display', 'none');
    });

    // $('.user-msg').keydown(function(event){
    //     var event=window.event||argument[0];
    //     if(event.keyCode==13){
    //     $(".btn").click();
    //     event.returnValue=false;
    //     }
    // });

    $('.user-name,.user-msg').keydown(function(e){
        if(e.keyCode == 13 && e.ctrlKey){
                     // 这里实现换行
            $(".user-msg").value += "\n\r";
        }else if(e.keyCode == 13){
            // 避免回车键换行
            event.returnValue=false;
            // e.preventDefault();
            $(".btn").click();
            // 下面写你的发送消息的代码
        }
    })
    
})



