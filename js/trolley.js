// 购物车Class
ShoppingCart : {
	// 初始化购物车
	initCart : function(){
		var shoppingCartContainer = document.getElementById("shoppingCartContainer");
		if(!shoppingCartContainer){
			return;
		}
	 	$("#paymoney").click(function(e){
	 		var shoppingCartContainer = $("#shoppingCartContainer").text();
			ShoppingCart.checkShoppingCart();
	    });
		$(".mycart_nav").bind("mouseenter",function(){
			if(!$(this).hasClass("mycart_hover"))
			{
				$(this).addClass("mycart_hover");
				.ShoppingCart.showCart();
				//$('#shoppingcartContainer').stop(true).show(0)
				
			}
			
		});
		$(".mycart_nav").bind("mouseleave",function(){
			if($(this).hasClass("mycart_hover"))
			{
				//$('#shoppingcartContainer').css('display','none');
				$('#shoppingcartContainer').html('');
				$(this).removeClass("mycart_hover");
				
			}
			
		});
		//以下是用户中心购物车
		$('.cartlnk').click(function(e){
			var dMyCart = $('.mycart_header');
			if(!dMyCart.hasClass('mycart_hover')){
				dMyCart.addClass('mycart_hover');
				.ShoppingCart.showCart();
				$('.mycart_header #shoppingcartContainer').show();	
			}
		});
		$(document).click(function(){
			$('.mycart_header').removeClass('mycart_hover');
			$('.mycart_header #shoppingcartContainer').hide();					
		});	
		$('#shoppingcartContainer').click(function(e){
		});
	},
	initCartCnt:function(data,isshow){
		//alert(data);
		$("#shoppingcartContainer").html(data);
		$('#shoppingcartContainer li:first').find('.num_warntips').remove();
		var warnMsg=$(".num_warntips");
		if(warnMsg.length>0){
			$('html,body').animate({scrollTop: $(".num_warntips").first().offset().top},1000);
			warnMsg.fadeIn("fast").delay(1000).fadeOut();
		}				
		//收藏
		$('.JsFavorite').click(function(){
			var pid = $(this).attr('cid');
			var psize = $(this).attr('psize');
			.ShoppingCart.addCommodityFavorite(pid,psize,this);
		});
		//删除
		$('.JsRemoveGood').click(function(){
			var pid = $(this).attr('pid');
			ShoppingCart.removeProduct(pid,true,this);
		});	
	},
	// 修改购物车数量
	changeProductNum : function(type,index,simpleShoppingCart){
		var productNo = $("#productNo_"+index).val();
		var name = "oldNum_"+productNo;
		var sumProductNum=0;
	},
	// 删除商品
	removeProduct : function(id,isTip,srcElement){
		if(isTip){
			if(!confirm("您确定要将此商品删除吗？")){return;}
		}
		

					
	},
}

$.ajax({
	type:"POST",
 	dataType:"JSON",
	data:{
		phoneNumber:$(".phoneNum").val(),
		password:$(".password_1").val(),
	},
	url:"http://120.78.86.65/ajax.php",
	success:function(data){
		console.log(data);
        
	},
	error:function(e){
		alert(e);
	},
})
