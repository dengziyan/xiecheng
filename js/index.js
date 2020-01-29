	
    //language显示
    $('.language').mouseenter(function(){
    	$(this).children('.country').addClass('showcountry');
    })
    $('.language').mouseleave(function(){
    	$(this).children('.country').removeClass('showcountry');
    })
	//上面菜单的变化
	$('.childbox').mouseenter(function(e){
		e.stopPropagation();
	})
	$('.box').children('.li1').mouseenter(function(){
		$(this).css({'background':'#fff','border':'#F4F4F4'}).siblings().css({'background':'','border':''});
		$(this).children().addClass('current');
	})
	//客服li
	$('.box').children('.li3').hover(function() {
		$(this).css({'background':'#2577E3','border':'#F4F4F4'}).siblings().css({'background':'','border':''});
		$(this).children('b').css('color','#fff');
		$(this).children('.icon').css('background-position','-97px -6px');
		$(this).children().addClass('current');
	}, function() {
		// $(this).children('b').css('color','');
		// $(this).children('.icon').css('background-position','');
		// $(this).children().removeClass('current');
	});


	$('.box').children().mouseleave(function(){
		$(this).children().removeClass('current');
	})
	//code的变化
	$('.box').children('.li2').mouseenter(function(){
		$(this).css({'background':'#fff','border':'#F4F4F4'}).siblings().css({'background':'','border':''});
		$(this).children('i').addClass('showcode');
	})
	$('.box').children('.li2').mouseleave(function(){
		$(this).children('i').removeClass('showcode');
	})
	//子菜单的变化
	$('.childbox,.childbox2,.childbox3').children().mouseenter(function(){
		$(this).css('background','#F4F4F4').siblings().css('background','');
	})
	$('.childbox,.childbox2,.childbox3').children().mouseleave(function(){
		$('.box').children().css({'background':'','border':''})
	})

	$('.navchildbox').parent().hover(function(event) {
		//nav显示子菜单
		$('.navchildbox').addClass('showli');
		$(this).siblings().children('.navchildbox').removeClass('showli');
		$('.nav_bottom').children().hide();
        //nav显示大三角
        $(this).children('u').addClass('showu');
        $(this).siblings().children('u').removeClass('showu');
	}, function() {
		$('.nav_bottom').children().show();
		$('.navchildbox').removeClass('showli');
	});


//轮播图

   $(function(){
        var timer;
        var num=0;

        function gogo(){
            clearInterval(timer)
            timer=setInterval(function(){
                num++;
                if(num>5){
                    num=0;
                }
                // 让ul左移;
                $('.banner ul').css('left', -num*1920+'px');
                // 对应的圆圈增加类
                $('.banner ol li').eq(num).addClass('current');
                // 兄弟姐妹删除类
                $('.banner ol li').eq(num).siblings().removeClass('current');
                // $('ol li').eq(num).addClass('current').siblings().removeClass('current');
            },4000)
        }
        gogo();
        // 给div增加鼠标移入移出事件
        $('.banner').hover(function() {
            // 鼠标移入停止定时器
            clearInterval(timer)
        }, function() {
            // 鼠标移出开始定时器
            gogo();
        });
        // 点击索引
        $('.banner ol li').click(function(event) {
            num=$(this).index();
            $('.banner ul').css('left', -num*1920+'px');
            $(this).addClass('current');
            $(this).siblings().removeClass('current');
        });
    })

   //.detailed的显示
   $('.main_left').children().hover(function() {
   	$(this).children().children('.detailed').show();
   }, function() {
   	$(this).children().children('.detailed').hide();
   });