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



	var num1=0;
	var list1=[
	{number:'D7172',settime:'20:36',position:'-175px -80px',place:'湛江西',alltime:'2小时50分钟',ifcheck:'false',seat:'二等座',price:'185',ifticket:'有票'},
	{number:'',settime:'21:53',position:'-175px -80px',place:'广州南',alltime:'',ifcheck:'false',seat:'二等座',price:'284',ifticket:'有票'},
	{number:'',settime:'',position:'',place:'',alltime:'',ifcheck:'',seat:'二等座',price:'300',ifticket:'无票'}
	]
	var list2=[
	{number:'D7172',settime:'20:36',position:'-175px -80px',place:'湛江西',alltime:'2小时50分钟',ifcheck:'false',seat:'二等座',price:'185',ifticket:'有票'},
	{number:'',settime:'21:53',position:'-175px -80px',place:'广州南',alltime:'',ifcheck:'false',seat:'二等座',price:'284',ifticket:'有票'},
	{number:'',settime:'',position:'',place:'',alltime:'',ifcheck:'',seat:'二等座',price:'300',ifticket:'无票'}
	]
	var list3=[
	{number:'D7172',settime:'20:36',position:'-175px -80px',place:'湛江西',alltime:'2小时50分钟',ifcheck:'false',seat:'二等座',price:'185',ifticket:'有票'},
	{number:'',settime:'21:53',position:'-175px -80px',place:'广州南',alltime:'',ifcheck:'false',seat:'二等座',price:'284',ifticket:'有票'},
	{number:'',settime:'',position:'',place:'',alltime:'',ifcheck:'',seat:'二等座',price:'300',ifticket:'无票'}
	]
	var list4=[
	{number:'D7172',settime:'20:36',position:'-175px -80px',place:'湛江西',alltime:'2小时50分钟',ifcheck:'false',seat:'二等座',price:'185',ifticket:'有票'},
	{number:'',settime:'21:53',position:'-175px -80px',place:'广州南',alltime:'',ifcheck:'false',seat:'二等座',price:'284',ifticket:'有票'},
	{number:'',settime:'',position:'',place:'',alltime:'',ifcheck:'',seat:'二等座',price:'300',ifticket:'wu票'}
	]
	for(var i=0;i<list1.length;i++){
			// a.clone()克隆a标签 不带事件  加true带事件
			var tag=$('.ticket_sup li').eq(0).clone(true);
			if(i==0) $('.ticket_sup').html('')
			tag.children('.icon').css('background-position',list1[i].position);
			tag.children('b:eq(0)').html(list1[i].number);
			tag.children('b:eq(1)').html(list1[i].settime);
			tag.children('i:eq(0)').html(list1[i].place);	
			tag.children('i:eq(1)').html(list1[i].alltime);	
			tag.children('input').attr('checked',list1[i].ifcheck);
			tag.children('u').html(list1[i].price);
			tag.children('i:eq(2)').html(list1[i].seat);
			tag.children('i:eq(3)').html(list1[i].ifticket);			
			$('.ticket_sup').append(tag)
		}
		// for(var i=0;i<list2.length;i++){
		// 	// a.clone()克隆a标签 不带事件  加true带事件
		// 	var tag=$('.ticket_sub li').eq(0).clone(true);
		// 	if(i==0) $('.ticket_sub').html('')
		// 	tag.children('.icon').css('background-position',list2[i].position);
		// 	tag.children('b:eq(0)').html(list2[i].number);
		// 	tag.children('b:eq(1)').html(list2[i].settime);
		// 	tag.children('i:eq(0)').html(list2[i].place);	
		// 	tag.children('i:eq(1)').html(list2[i].alltime);	
		// 	tag.children('input').attr('checked',list2[i].ifcheck);	
		// 	tag.children('u').html(list2[i].price);
		// 	tag.children('i:eq(2)').html(list2[i].seat);
		// 	tag.children('i:eq(3)').html(list2[i].ifticket);			
		// 	$('.ticket_sub').append(tag)
		// }
		// 	for(var i=0;i<list3.length;i++){
		// 	// a.clone()克隆a标签 不带事件  加true带事件
		// 	var tag=$('.ticket_sup li').eq(0).clone(true);
		// 	if(i==0) $('.ticket_sup').html('')
		// 	tag.children('.icon').css('background-position',list3[i].position);
		// 	tag.children('b:eq(0)').html(list3[i].number);
		// 	tag.children('b:eq(1)').html(list3[i].settime);
		// 	tag.children('i:eq(0)').html(list3[i].place);	
		// 	tag.children('i:eq(1)').html(list3[i].alltime);	
		// 	tag.children('input').attr('checked',list3[i].ifcheck);
		// 	tag.children('u').html(list3[i].price);
		// 	tag.children('i:eq(2)').htm(list3[i].seat);
		// 	tag.children('i:eq(3)').html(list3[i].ifticket);			
		// 	$('.ticket_sup').append(tag)
		// }
		// for(var i=0;i<list4.length;i++){
		// 	// a.clone()克隆a标签 不带事件  加true带事件
		// 	var tag=$('.ticket_sub li').eq(0).clone(true);
		// 	if(i==0) $('.ticket_sub').html('')
		// 	tag.children('.icon').css('background-position',list4[i].position);
		// 	tag.children('b:eq(0)').html(list4[i].number);
		// 	tag.children('b:eq(1)').html(list4[i].settime);
		// 	tag.children('i:eq(0)').html(list4[i].place);	
		// 	tag.children('i:eq(1)').html(list4[i].alltime);	
		// 	tag.children('input').attr('checked',list4[i].ifcheck);	
		// 	tag.children('u').html(list4[i].price);
		// 	tag.children('i:eq(2)').html(list4[i].seat);
		// 	tag.children('i:eq(3)').html(list4[i].ifticket);			
		// 	$('.ticket_sub').append(tag)
		// }

		var biglist=[[list1,list2],[list3,list4]]
		for(var i=0;i<biglist.length;i++){
				// a.clone()克隆a标签 不带事件  加true带事件
				var tag=$('.ticketbox li').eq(0).clone(true);
				if(i==0) $('.ticketbox').html('')			
				$('.ticketbox').append(tag)
			}