window.onload = function(){
    var oPhone = document.getElementById("phone");
    var anew = document.getElementsByClassName("new")[0];
    var clickInput=document.getElementsByClassName("clickInput");
    var oMessage = document.getElementById("message");
    var oEmail = document.getElementById("email");
    var oEnterPassword = document.getElementById("enterPassword");
    var Anew_emails = document.getElementsByClassName("new_email");
    // 失去焦点
    oPhone.onblur = function(){
        //<1>清除空格
        oPhone.style.borderColor="red";
       	anew.style.color="red";
        var oValue = this.value.replace(/\s/g, "");
        this.value = oValue;
        //<2>手机号验证
        if(!oValue){
            anew.innerHTML = "手机号不能为空";
        }else if(!/^[1-3]\d{10}$/.test(oValue)){
            anew.innerHTML = "请填写正确的手机号";
        }else{
            anew.innerHTML = "√";
            anew.style.borderColor="green";
        }
    }

    // 验证码失去焦点
    oMessage.onblur = function(){
    	 //<1>清除空格
    	anew.style.color="red";
    	anew.innerHTML = "失去焦点"
        var oValue = this.value.replace(/\s/g, "");
        this.value = oValue;
        //<2>验证码验证 
        if(!oValue){
            anew.innerHTML = "验证码不能为空";
        }else{
        	anew.innerHTML = "验证码正确";
        }
    }

    //手机号/会员名称/邮箱
    oEmail.onblur = function(){
    	 //<1>清除空格
    	// Anew_emails.style.color="red";
    	Anew_emails.innerHTML = "失去焦点"
        var oValue = this.value.replace(/\s/g, "");
        this.value = oValue;
       //手机号/会员名称/邮箱验证
       	if(!oValue){
            Anew_emails.innerHTML = "不能为空";
        }else if(!/^[\w]+(\.[\w]+)*@[\w]+(\.[\w]+)+$/ ||　!/^[1-3]\d{10}$/.test(oValue)){
        	Anew_emails.innerHTML = "请输入合法电子邮件";
        }else{
        	Anew_emails.innerHTML = "验证码正确";
        }
    }
       
    
}

$(function(){
	$(".ul").find("button").click(function(){
		$(this).removeClass('password').addClass('phonNum');
		$(this).siblings().removeClass('phonNum').addClass('password');
		$('.login_form').hide();
		$('.' + $(this).data('class')).show();
		//取data-class的值
		// $(".ul").find("div").css("display", "none");
		// $(".ul").find("div").eq($(this).index()).css("display", "block");

		// 数据路由是 http://120.78.86.65/ajax.php
		// form提交事件
	});
		
  	$(".login_form").submit(function(event){
		// 表单提交
		$.ajax({
			type:"POST",
			dataType:"JSON",
			data:{
				userName:$(this).find(".phoneNum").val(),
				password:$(this).find(".password_1").val(),
			},
			url:"http://120.78.86.65/login.php",
			succss:function(data){
				console.log(data);
				if(data.massage == "登录成功"){
					window.location.href = "../html/register.html";
				}else{
					alert("登录失败")
				}

			},
			error:function(e){
				console.log(e);
			},
		});
		// 阻止表单默认跳转
		event.preventDefault();
	});   
})
