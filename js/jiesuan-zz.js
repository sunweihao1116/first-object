
var nameFlag=false;
var xxdzFlag=false;
var telFlag=false;
var yzbmFlag=false;
$("#name").blur(function(){
		//var reg=/^1(3|5|8)[\d]{9}$/;
		var reg=/^\w+$/;
		var str=$(this).val();
		if(!reg.test(str)){
			$("#s1").html("请填写用户名");
			nameFlag=false;
		}
		else{
			$("#s1").html("")
			nameFlag=true;
		}
	}) 
	$("#xxdz").blur(function(){
		var reg=/^.{4,}$/;
		var str=$(this).val();
		if(!reg.test(str)){
			$("#s2").html("请输入长度大于4个字符的详细地址");
			xxdzFlag=false;
		}
		else{
			$("#s2").html("");
			xxdzFlag=true;
		}
	})
	$("#tel").blur(function(){
		var reg=/^1(3|5|8)[\d]{9}$/;
		var str=$(this).val();
		if(!reg.test(str)){
			$("#s3").html("请填写手机号码");
			telFlag=false;
		}
		else{
			$("#s3").html("");
			telFlag=true;
		}
	})
	$("#yzbm").blur(function(){
		var reg=/^\d{6}$/;
		var str=$(this).val();
		if(!reg.test(str)){
			$("#s4").html("请输入正确的邮政编码");
			yzbmFlag=false;
		}
		else{
			$("#s4").html("");
			yzbmFlag=true;
		}
	})
	$("#tel").keyup(function(){
		var str=$(this).val()
		if($(this).val().length>11){
			str=str.substr(0,11)
		}
		$(this).val(str)
	})
	
$("#btn").click(function(){
	if(yzbmFlag&&telFlag&&xxdzFlag&&nameFlag){
		alert("可以结算");
		var arr=[];
		var _json={
			"name" : $("#name").val(),
			"address":$("#xxdz").val(),
			"code" : $("#yzbm").val(),
			"tel" : $("#tel").val()
		}
		var cookieinformation=getCookie("information");
		if(cookieinformation.length!=0){
			arr=cookieinformation;	
		}
		arr.push(_json)
		setCookie("information",JSON.stringify(arr),"1")
		location.href="http://127.0.0.1/s-object/jiesuan2.html"
	}else{
		if($("#name").val()==""){
			$("#s1").html("请填写用户名");
			return
		}else{
			if($("#xxdz").val()==""){
				$("#s2").html("请输入长度大于4个字符的详细地址");
				return
			}else{
				if($("#yzbm").val()==""){
					$("#s4").html("请输入正确的邮政编码");
					return
				}else{
					window.open("http://127.0.0.1/s-object/tanchu-window.html","_blank","width=300,height=200,left=400,top=400")
				}
			}
		}
	}
})
