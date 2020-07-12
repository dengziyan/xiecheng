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


    //selectbox 里面的操作
	$('.selectbox ul li').click(function(event) {
				// index获取用户当前操作标签的索引值
				console.log($(this).index())
				$(this).css('background', 'red');
				$(this).siblings().css('background', 'none');

				$('.detailbox>div').eq($(this).index()).addClass('current');
				$('.detailbox>div').eq($(this).index()).siblings().removeClass('current')

			});

	 //.main_left ol 里面的操作
	$('.main_left .drop-down').click(function(event) {
				// index获取用户当前操作标签的索引值
				$(this).css('background', 'red');
				$(this).siblings().css('background', 'none');

				$(this).children('ol').addClass('current');
				$(this).children().siblings().removeClass('current')

			});