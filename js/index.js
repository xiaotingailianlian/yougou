// define(["jquery"], function($){
	$(function(){
		// $(".car").hover(function(){
		// 	var oValue = this.value.replace(/\s/g, "");
	 //        this.value = oValue;
	 //        if(!oValue){
	 //            $(".car_hover").innerHTML = "您的购物车中还没有任何商品！";
	 //        }

			var aBtns = $(".play").find("ol").find("li");
			var oUl = $(".play").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //当前是第几张图片索引
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				aBtns.removeClass("active").eq(iNow).addClass("active");
				if(iNow == 5){
					aBtns.eq(0).addClass("active");
				}
				//让ul动
				oUl.animate({
					top: -480 * iNow
				}, 1000, function(){
					if(iNow == 5){
						iNow = 0;
						oUl.css("top", 0);
					}
				})
			}


			function timerInner(){
				iNow++;
				tab();
				document.title = iNow;
			}

			timer = setInterval(timerInner, 2000);

			//添加移入移出效果
			$(".play").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})
		



		


		// $.ajax({
		// 	type:"POST",
		//  	dataType:"JSON",
		// 	data:{},
		// 	url:"http://120.78.86.65/ajax.php",
		// 	success:function(res){
		// 		console.log(res);
		// 		var html = "";
		// 		//商品列表
  //               for(var i = 0; i < res.length; i++){
  //                   html += ` <li class="shoes">
  //                       <input type="hidden" value="53d0e923c7da508b0c00007f">
  //                       <div class="titt">
  //                             <i class="iconn nvx"></i>
  //                             <h3><a href="http://www.yougou.com/f-0-MXZ-0-1.html" target="_blank">女鞋</a>
                                
  //                             </h3>
  //                       </div>
  //                       <p class="chldlist">
  //                             <a href="http://www.yougou.com/f-0-MXZ_UI0-0-1.html" target="_blank">美靴上新</a>
                          
  //                             <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ-05B000-1.html" target="_blank">专柜同款</a>
  //                       </p>
  //                       <div class="popmenu2">                          
  //                             <div class="categoryy">
  //                               <p class="categorytit">
  //                                 <a href="http://www.yougou.com/f-0-MXZ-0-1.html" target="_blank" style="margin-left: 0px;">
                                    
  //                                       <img src="http://i2.ygimg.cn/pics/shop/cms/image/cms/2016/01/21/7410999bee5849998538d3f8973a3c4c.jpg" alt="">
                                    
  //                                 </a>
  //                               </p>

  //                               <p class="categoryul">
                                  
  //                                     <a href="http://www.yougou.com/f-0-MXZ_UI0-0-1.html" target="_blank" style="color: #ff4d00;">
  //                                       美靴上新
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-0-MXZ_UI0_3CN-0-1.html" target="_blank" style="color: #171414;">
  //                                       短靴
  //                                     </a><br/>
                                  
  //                                     <a href="http://www.yougou.com/f-0-MXZ_UI0_WKL-0-1.html" target="_blank">
  //                                       雪地靴
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-0-MXZ_UI0_78V-0-1.html" target="_blank" style="color: #171414;">
  //                                       中靴
  //                                     </a><br/>
                                  
  //                                     <a href="http://www.yougou.com/f-0-MXZ_UI0_K8M-0-1.html" target="_blank">
  //                                       长靴
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ-05B000-1.html" target="_blank">
  //                                       专柜同款
  //                                     </a><br/>
                                  
  //                                     <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ_UI0_0VD-05B000-1.html" target="_blank">
  //                                       绒里靴
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ_UI0_11U-05B000-1.html" target="_blank">
  //                                       马丁靴
  //                                     </a><br/>
                                  
  //                                     <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ_UI0_RY6-05B000-1.html" target="_blank">
  //                                       及裸靴
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ_F5R_UWO-05B000-1.html" target="_blank">
  //                                       满帮鞋
  //                                     </a><br/>
                                  
  //                                     <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ_F5R_7BD-05B000-1.html" target="_blank">
  //                                       粗跟鞋
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ_F5R_MT3-05B000-1.html" target="_blank" style="color: ##FF0000;">
  //                                       运动风
  //                                     </a><br/>
                                  
  //                                     <a href="http://www.yougou.com/f-basto_bata_belle_bevivo_hushpuppies_innet_joypeace_millies_senda_staccato_tata_teenmix-MXZ_F5R_8YR-05B000-1.html" target="_blank">
  //                                       松糕鞋
  //                                     </a>
                                  
  //                               </p>
  //                             </div>
                          
  //                             <div class="categoryy">
  //                               <p class="categorytit">
  //                                 <a href="http://www.yougou.com/f-basto_bata_belle_hushpuppies_senda_staccato_tata_teenmix-MXZ-0-0.html" target="_blank" style="margin-left: 0px;">
                                    
  //                                       <img src="http://i1.ygimg.cn/pics/shop/cms/image/cms/2016/01/21/146a81e034b845edb9a1e16bc5023334.jpg" alt="">
                                    
  //                                 </a>
  //                               </p>

  //                               <p class="categoryul">
                                  
  //                                     <a href="http://www.yougou.com/f-belle-0-0-0.html" target="_blank">
  //                                       百丽
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-tata-0-0-0.html" target="_blank">
  //                                       他她
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-teenmix-MXZ_F5R-0-0.html" target="_blank">
  //                                       天美意
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-staccato-MXZ_F5R-0-0.html" target="_blank">
  //                                       思加图
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-basto-0-0-0.html" target="_blank">
  //                                       百思图
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-joypeace-0-0-0.html" target="_blank">
  //                                       真美诗
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-senda-0-0-0.html" target="_blank">
  //                                       森达
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-hushpuppies-0-0-0.html" target="_blank">
  //                                       暇步士
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-millies-0-0-0.html" target="_blank">
  //                                       妙丽
  //                                     </a>
                                  
  //                                     <a href="http://www.yougou.com/f-bata-0-0-0.html" target="_blank">
  //                                       拔佳
  //                                     </a>
                                  
  //                               </p>
  //                             </div>
  //                       </div>
  //                   </li>`;
  //               }
  //               // $(".shoes").html(html);
  //           }
		// 	// error:function(e){
		// 	// 	console.log(e);
		// 	// },
		// })
	 //    $("#nav .user").on({
  //           mouseover: function(){
  //               $(".popmenu2").css("display", "block");
  //               $(".popmenu2").css("background","");
  //           }
  //       })
	})
// })
