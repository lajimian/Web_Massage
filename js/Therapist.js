$(document).ready(function(){
showtherapist();
function showtherapist(){
	$.ajax({  
		           type: "post",  
		           url: "/phpbin/therapist.php",  
		           data: {"test":"123"},  
		           dataType:"json", 
		           success:function(data){
		           	console.log("返回的数据" + data[0].tname);
		           	loaded(data);
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			});  	
}
function loaded(list){
		for(var i = 0;i <list.length;++i)
			{
				var headHtml = $.templates("#therapistes").render(list[i]);
	    		$(".body-cnt").append(headHtml);
			}
		for(var i = 0;i <list.length;++i)//处理空格！！！！生气
			{
				console.log(list[i].srcs);
	    		list[i].srcs = list[i].srcs.replace(" ","");
	    		console.log(list[i].srcs);
			}
		for(var i = 0;i <list.length;++i)
			{
	    		$(".info-pic").eq(i).children('img').attr('src',list[i].srcs); 
	    		//console.log("为什么读取不了？？"+list[i].srcs);
	    		console.log($(".info-pic").eq(i).children('img')[0].src);
			}
	}

});