	var hotTimer=setInterval(autoPlay3,3000)
	var index3=0;
	autoPlay3()
	function autoPlay3(){
		$(".hot-list>li").eq(index3).css("background","#000").siblings("li").css("background","#aaa")
		$(".hot-main>div").eq(index3).stop().animate({"opacity":1},300).siblings("div").stop().animate({"opacity":0},300)
		$(".hot-title>li").eq(index3).find("span").css("color","#f0f").end().siblings("li").find("span").css("color","#000")
		index3++
		if(index3==5){
			index3=0
		}	
	}
	$(".hot").on({
		"mouseenter":function(){
			clearInterval(hotTimer)
		},
		"mouseleave":function(){
			hotTimer=setInterval(autoPlay3,3000)
		}
	})
	$(".hot-title>li,.hot-list>li").on({
		"mouseenter":function(){
			index3=$(this).index();
			$(".hot-list>li").eq(index3).css("background","#000").siblings("li").css("background","#aaa")
			$(".hot-main>div").eq(index3).stop().animate({"opacity":1},300).siblings("div").stop().animate({"opacity":0},300)
			$(".hot-title>li").eq(index3).find("span").css("color","#f0f").end().siblings("li").find("span").css("color","#000")
		}
	})
	