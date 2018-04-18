window.onload = function(){
    var oInput = document.getElementById("input");
    var aSpan_null = document.getElementsByClassName("span_null")[0];
    var aSpanVerification=document.getElementsByClassName("spanVerification")
    var oPhone = document.getElementById("phone");
    var oVerification=document.getElementById("verification");
    var oSpanVerification = document.getElementById("spanVerification");
    var oMessage = document.getElementById("message");
    var aClickInputTWOs = document.getElementsByClassName("clickInputTWO");
    var oNote = document.getElementById("note");
    // 失去焦点
    oInput.onblur = function(){
        //<1>清除空格
        oPhone.style.borderColor="red";
        aSpan_null.style.color="red";
        aSpan_null.style.backgroundImage="url(../images/icon_sig_reg.png) no-repeat -179px -97px;"
        var oValue = this.value.replace(/\s/g, "");
        this.value = oValue;
        aSpan_null.style.backgroundImage='url(../images/icon_sig_reg.png)'
        //<2>手机号验证
        if(!oValue){
            aSpan_null.innerHTML = "手机号不能为空";
        }else if(!/^[1-3]\d{10}$/.test(oValue)){
            aSpan_null.innerHTML = "格式错误";
        }else{
            aSpan_null.innerHTML = "";
             oPhone.style.borderColor="green";
        }

        
    }
    // 验证码验证
    oVerification.onblur = function(){
         //<1>清除空格
       // oSpanVerification.style.color="red";
        oVerification.style.borderColor="red";
        var oValue = this.value.replace(/\s/g, "");
        this.value = oValue;
        //<2>验证码验证 
        if(!oValue){
            aSpan_null.innerHTML = "验证码不能为空";
        }else{
            aSpan_null.innerHTML = "验证码正确";
        }
    }


    // 短信验证码
    // oNote.onblur = function(){
    //      //<1>清除空格
    //    aSpan_null.style.color="red";
    //    // aClickInputTWOs.style.borderColor = "red";
    //     // oNote.style.borderColor="red";
    //     var oValue = this.value.replace(/\s/g, "");
    //     this.value = oValue;
    //     if(!oValue){
    //         aSpan_null.innerHTML = "验证码不能为空";
    //     } 
        
}
    
    	
    	

$(function(){
    $(".ul").find("button").click(function(){
        $(this).removeClass('password').addClass('phonNum');
        $(this).siblings().removeClass('phonNum').addClass('password');
        $('.login_form').hide();
        $('.' + $(this).data('class')).show();
    })
	// form提交事件
	$(".register_form").submit(function(event){
		// 表单提交
		// $(".phoneNum").blud()
		$.ajax({
			type:"POST",
		 	dataType:"JSON",
			data:{
				phoneNumber:$(".phoneNum").val(),
				password:$(".password_1").val(),
			},
			url:"http://120.78.86.65/register.php",
			success:function(data){
				console.log(data);
                console.log(data.massage);
                if(data.massage == "注册成功"){
                    window.location.href = "../html/login.html";
                }else{
                    alert("注册失败");
                }
			},
			error:function(e){
				alert(e);
			},
		})
		event.preventDefault();
    })
})
















