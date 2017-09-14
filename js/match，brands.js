	$(".match-main>img").eq(0).show().siblings("img").hide()
	$(".match-nav").on("mouseenter","li",function(){
		$(this).css({"background":"#e50163","color":"#fff"}).siblings("li").css({"background":"#fff","color":"#666"})
		$(".match-main>img").eq($(this).index()).show().siblings("img").hide()
	})
	
	
	var index4=0;
	$(".brands-main>img").eq(0).show().siblings("img").hide();
	$(".brands-nav>li").eq(0).css("color","#f0f").siblings("li").css("color","#000")
	var brandstimer=setInterval(autoPlay4,3000)
	function autoPlay4(){
		$(".brands-main>img").eq(index4).show().siblings("img").hide();
		$(".brands-nav>li").eq(index4).css("color","#f0f").siblings("li").css("color","#000")
		index4++
		if(index4==4){
			index4=0
		}	
	}
	$(".brands-main>img").on({
		"mouseenter":function(){
			clearInterval(brandstimer)
		},
		"mouseleave":function(){
			brandstimer=setInterval(autoPlay4,2000)
		}
	})
	$(".brands-nav>li").on({
		"mouseenter":function(){
			index4=$(this).index();
			$(".brands-main>img").eq(index4).show().siblings("img").hide();
			$(".brands-nav>li").eq(index4).css("color","#f0f").siblings("li").css("color","#000")
		}
	})