$(function(){
	$(".ul").find("button").click(function(){
		$(this).removeClass('password').addClass('phonNum');
		$(this).siblings().removeClass('phonNum').addClass('password');
		$('.login').hide();
		$('.' + $(this).data('class')).show();
		// $(".ul").find("div").css("display", "none");
		// $(".ul").find("div").eq($(this).index()).css("display", "block");
	});
	$.ajax({
		type:"POST",
		dataType:"JSON",
		data:{
			phoneNum:'434343',
			password:'eeeeee'
		},
		url:"http://120.78.86.65/register.php",
		success:function(data) {
			console.log(data)
		}
	})
})



