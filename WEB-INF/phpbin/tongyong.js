$(document).ready(function(){
	finduser();
	function finduser(){
		$.ajax({  
		           type: "post",  
		           url: "../WEB-INF/phpbin/finduser.php",  
		           data: {"test":"nothing"},  
		           dataType:"json", 
		           success:function(data){
			           console.log("返回的数据1111" + data[0].first_name);
			           if(data[0].first_name == null && data[0].last_name ==null)
			           	{

			           	}
			           	else{
			           		$(".header-rightr").text(data[0].first_name+data[0].last_name);
			           		$(".menu-item").eq(7).children('a').text(data[0].first_name +" "+data[0].last_name);
			           	}
			           
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			}); 
	}
});