	$(function(){
		$.ajax({
			type:"get",
			url:"http://127.0.0.1/s-object/js/data.json",
			success : function(res){
				var html = "";
				//console.log(res)
				for (var  i in  res) {
					var ch = res[i];//{}
					html += `<li>
								<a href="http://127.0.0.1/s-object/Detail-pages.html?id=${ch.id}&src=${ch.src}&name=${ch.name}&price=${ch.price}">
									<img src="img/imgs/${ch.src}" alt="" />
									<div class="title">${ch.name}</div>
									<div class="price">￥${ch.price}</div>
								</a>
								<span data-id=${ch.id}  data-name=${ch.name} data-src=${ch.src} data-price=${ch.price}   style="display:none"></span>
							</li>`;
				}
				$("#shop-main").html( html );
			}
		})
	})
	$("#shop-main").on("click","li",function(){
		alert("跳转详情页")
	})