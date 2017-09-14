$(".tide-left").on("mouseenter","div",function(){
		$(this).find("span").css({"color":"#000","background":"rgba(0,0,0,0.4)"})
	}).on("mouseleave","div",function(){
		$(this).find("span").css({"color":"#797979","background":"rgba(255,255,255,0.6)"})
	})
	$(".tide-right").on("mouseenter","a",function(){
		$(this).find("div").show();
		$(this).find("span").stop().animate({"bottom":42},300)
	}).on("mouseleave","a",function(){
		$(this).find("div").hide();
		$(this).find("span").stop().animate({"bottom":5},300)
	})
	
	
	var index2=0;
	var newtimer=setInterval(autoPlay2,3000)
	
	var flag=true;
	$(".c-nav>li").eq(0).css("background","#000").siblings("li").css("background","#ddd");
	//console.log(index2)
	function autoPlay2(){
		index2++
			if(index2>=7){
				index2=0
		}
		$(".c-nav>li").eq(index2).css("background","#000").siblings("li").css("background","#ddd");
		
		$(".new-imgs").animate({"margin-left":-1185},100,function(){
			$(".new-imgs").css("margin-left",0)
			$(".new-imgs").append($(".new-imgs img:first"));
			
			flag=true;
		})
			flag=false;	
	}
	$(".new-main").mouseenter(function(){
		clearInterval(newtimer);
		//alert("")
	}).mouseleave(function(){
		newtimer=setInterval(autoPlay2,3000);
	})
	
	$("#new-next").click(function(){
		if(flag){
			autoPlay2()
			flag=false;
		}
	}).mouseenter(function(){
		
		$("#new-next").css("opacity",1)
	}).mouseleave(function(){
		$("#new-next").css("opacity",.5)
	})
	
	$("#new-prev").click(function(){
		
		if(flag){
			index2--;
			if(index2<0){
				index2=6
			}
			$(".c-nav>li").eq(index2).css("background","#000").siblings("li").css("background","#ddd")
			$(".new-imgs").prepend($(".new-imgs>img:last"))
					.css("margin-left",-1185)
					.animate({"margin-left":0},100,function(){
						flag=true;
					})
			flag=false;	
		}
	}).mouseenter(function(){
		$("#new-prev").css("opacity",1)
	}).mouseleave(function(){
		$("#new-prev").css("opacity",.5)
	})