	
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
	$('.childbox,.childbox2').children().mouseenter(function(){
		$(this).css('background','#F4F4F4').siblings().css('background','');
	})
	$('.childbox,.childbox2').children().mouseleave(function(){
		$('.box').children().css({'background':'','border':''})
	})

	$('.navchildbox').parent().mouseenter(function(event) {
		//nav显示子菜单
		$('.navchildbox').addClass('showli');
		$(this).siblings().children('.navchildbox').removeClass('showli');
        //nav显示大三角
        $(this).children('u').addClass('showu');
        $(this).siblings().children('u').removeClass('showu');
	});















var num=0;
		var timer;
		function gogo(){
           timer=setInterval(function(){
           	num++;
           	if(num==2) num=0;

           	box.style.left=-840*num+'px';
           },3000)
		}
		gogo()