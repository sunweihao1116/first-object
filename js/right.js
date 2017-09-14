$("#right").on("mouseenter","a",function(){
		$(this).css("background","#c10055");
		$(this).find("div").show()
	}).on("mouseleave","a",function(){
		$(this).css("background","")
		$(this).find("div").hide()
	})
	$(".right-top").click(function(){
		$("html,body").animate({scrollTop:0},1000)
	})
	$(".car-top").find("p:last").click(function(){
		$(this).parent().parent().animate({"left":35},800,function(){
			$(this).css({"left":-275})
		});
		
	})
	$("#car-main").on("click","dl",function(){
		location.href="http://127.0.0.1/s-object/shoppingcar.html"
	})
	
	$("#dl").click(function(){
		location.href="http://127.0.0.1/s-object/login.html"
	})
	$("#zc").click(function(){
		location.href="http://127.0.0.1/s-object/zc.html"
	})
	
