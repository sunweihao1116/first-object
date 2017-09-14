
var oTop=$(".cont-nav").offset().top//记录top值
window.onscroll=function(){
	var stop=document.body.scrollTop;
	if(stop>oTop){
		$(".cont-nav").css({"position":"fixed","left":$(".cont-nav").offset().left,"top":0})
	}
	else{
		$(".cont-nav").css({"position":"absolute","left":0,"top":0})
	}
}
$(".cont-nav>li:first").css({"border-top":"2px solid #E50163", "background":"#fff"})
$(".cont-c").find("div:first").show().siblings("div").hide()
$(".cont-nav").on("click","li",function(){
	if(document.body.scrollTop>oTop){
		document.body.scrollTop=oTop
	}
	
	$(this).css({"border-top":"2px solid #E50163", "background":"#fff"})
			.siblings("li").css({"border":"none","background":"#eee"});
	$(".cont-c").find("div").eq($(this).index()).show().siblings("div").hide()
})
