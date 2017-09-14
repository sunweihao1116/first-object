var lunbo1timer=setInterval(autoPlay1,2000)
	var index1=0;
	autoPlay1()
	function autoPlay1(){
		$("#banner img").eq(index1).show().siblings("img").hide();
		$("#banner li").eq(index1).css("background","#fff").siblings("li").css("background","#000")
		index1++
		if(index1==6){
			index1=0
		}	
	}
	$("#banner").on({
		"mouseenter":function(){
			clearInterval(lunbo1timer)
		},
		"mouseleave":function(){
			lunbo1timer=setInterval(autoPlay1,2000)
		}
	})
	$("#banner>ul li").on({
		"mouseenter":function(){
			index1=$(this).index();
			$("#banner img").eq(index1).show().siblings("img").hide();
			$("#banner li").eq(index1).css("background","#fff").siblings("li").css("background","#000")
		}
	})

	//list
	$("#list").on("mouseenter","dl",function(){
		$(this).css({"background":"#e50163"}).find("dd a").css("color","#fff").end().find("h2").css("color","#fff")
		$("#list").css("border-right","1px solid #eee")
		$("#list div").eq($(this).index()).show().siblings("div").hide()
	}).on("mouseleave","dl",function(){
		$(this).css({"background":"#fff"}).find("a").css("color","#666").end().find("h2").css("color","#000")
		$("#list div").hide()
		$("#list").css("border-right","none")
	})
	

		$("#title1>li").eq(0).css({"background":"#000","border":"none","color":"#fff"}).siblings("li").css({"background":"#fff","color":"#555","border":"1px solid #aaa"})
		$("#imgs1>div").eq(0).show().siblings("div").hide()
		$("#title1").on("mouseenter","li",function(){
			$(this).css({"background":"#000","border":"none","color":"#fff"}).siblings("li").css({"background":"#fff","color":"#555","border":"1px solid #aaa"})
			//console.log($())
			$("#imgs1>div").eq($(this).index()).show().siblings("div").hide()
		})