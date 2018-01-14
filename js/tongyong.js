$(document).ready(function(){
	function orderarrange(){
		$.ajax({  
			           type: "post",  
			           url: "/phpbin/orderarrange.php",  
			           data: {"email":"email"},  
			           dataType:"json", 
			           success:function(data){
			           	mid = data;
			           console.log("返回的数据" + data);
			           console.log(data[0].email);
			           showorders(data);
			           $(".orderarrange-welcome").text("welcome" + data[0].email);
			           }, 
				       error:function() {console.log("error") },
			           complete: function(data){}
				}); 
	}
	function showorders(orders){
			for(var i = 0;i <orders.length;++i)
				{
					var headHtml = $.templates("#therapistes").render(orders[i]);
		    		$(".orderarrange").append(headHtml);
				}
	}
	finduser();
	function finduser(){
		$.ajax({  
		           type: "post",  
		           url: "/phpbin/finduser.php",  
		           data: {"test":"nothing"},  
		           dataType:"json", 
		           success:function(data){
			           console.log("返回的数据:" + data);
			           if(data === "请登录")
			           	{
			           		issignin = false;
			           	}
			           	else{
			           		issignin = true;
			           		$(".header-rightr").text(data[0].first_name+data[0].last_name);
			           		$(".menu-item").eq(7).children('a').text(data[0].first_name +" "+data[0].last_name);
			           	}
			           	if(issignin === false)
							$(".orderarrange").hide();
						else
							{
								$(".login-info").hide();
								$(".orderarrange").show();
								orderarrange();
							}
			           
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			}); 
	}
});