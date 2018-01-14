var order = {
	"email":"null",
	"datas":"null",
	"time": "null",
	"amorpm" :"null",
	"session":"null",
	"lengths":"null",
	"price":"null",
	"long":"null",
	"types":"type",
	"workername1":"null",
	"workername2":"null",
	"province":"null",
	"stree1":"null",
	"stree2":"null",
	"code":"null",
	"parking":"null"
}
var workernum = 1,count = 0;
var actionkind = "null",firstname ="null",lastname="null",phone="null";
var password = "null",email="null";
var sign=new Array(1,1,1,1,1);

var month = 6,week = 2,day = 1; //首先月份 周 日
var num=0,hour=5,minutes=0,amorpm="PM ";  //然后 小时 分钟 上下午
var session = "Single - 1 therapist";
var lengths = "60 minutes - $65";
var price = "",long = "";
var types = "Swedish Massage";
var workername1 = "null",workername2 = "null";//和上面的类型关联
var street1 = "null",street2 ="null",province = "null",code = "null",parking = "null";

/////////////功能函数
function getprice(){
	var a = lengths.length,i = 0,j = 0;
	i = lengths.indexOf('-') ;
	j = lengths.indexOf('$') ;
	for(var m = 0;m < i-1;++m)
		long+=lengths.charAt(m);
	for(var m = j+1;m < a;++m)
		price+=lengths.charAt(m);
}

////////动态转换
$(document).ready(function(){
	//$(".forgetpass").hide();//忘记密码
	//$(".signup").hide();  //注册
	//$(".login-info").hide();//登录
	
	$(".forget").click(function(event) {
		//$(".login-info").hide();
		window.open("forgetpass.html");
		//$(".forgetpass").show();
	});
	$(".signout").click(function(event) {
		$.ajax({  
		           type: "post",  
		           url: "/phpbin/signout.php",  
		           data: {"mid":"123"},  
		           //dataType:"json", 
		           success:function(data){
			           console.log("返回的数据" + data);
			           if(data == "succeed")
			           	{
			           		alert("退出成功！")
			           		$(".header-rightr").text('Sign in');
			           		$(".menu-item").eq(7).children('a').text('Login in');
			           	}
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			}); 
	});
});

function droporder(obj){
	var question = confirm("Are you sure you want to delete the order?");
	if(question){
		$(obj).parent().hide();
		var count = $(obj).parent().index();
		$.ajax({  
		           type: "post",  
		           url: "/phpbin/deleteorder.php",  
		           data: {"mid":mid[count-2]},  
		           //dataType:"json", 
		           success:function(data){
			           console.log("返回的数据" + data);
			           if(data == "deletesucceed")
			           		alert("订单已删除！")
			           else
			           		alert("订单删除失败！")
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			}); 
	}
}
var mid;
function orderarrange(){
	$.ajax({  
		           type: "post",  
		           url: "/phpbin/orderarrange.php",  
		           data: {"email":email},  
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
function showUser(sname,value)
		{ 
			setTimeout(ppx(sname,value),2000);
			
		}//登录注册相关
function ppx(sname,value){
		actionkind = "signup";
			//console.log("showuser!!"+ "(name)"+sname +"(value)"+ value);
			if(sname=="login"){
				actionkind = "login";
				email = $("input[name='login-email']").val();
				password = $("input[name='login-password']").val();
				//console.log("登录！！！" +"邮箱"+ email +"密码"+ password);
			} else if(sname=="signup"){
				if(sign[2]==0) 
					{alert("手机号格式错误！"); return; }
					else if(sign[4]==0) 
						{alert("密码格式错误！"); return ;}
						else if(sign[3]==0) 
							{alert("邮箱格式错误！"); return ;}
				actionkind = "signup";
				firstname = $("input[name='user[first-name]']").val();
				lastname = $("input[name='user[last-name]']").val();
				phone = $("input[name='user[phone]']").val();
				email = $("input[name='user[email]']").val();
				password = $("input[name='user[password]']").val();
				console.log("注册！！！" +"邮箱"+ email +"密码"+ password);
			}
			if(actionkind=="signup")
				{
					if(email == "" || password=="" || phone=="")
						return ;
				}
			else
				{
					if(email == "" || password=="")
						return ;
				}
			//console.log("登录界面"+actionkind +":"+ firstname+":" + phone+":" + email+":" + password) 
			$.ajax({  
		           type: "post",  
		           url: "/phpbin/test.php",  
		           data: {"actionkind":actionkind,
				          "firstname":firstname,
				          "lastname":lastname,
				          "phone":phone,
		           		  "email":email,
		           		  "password":password},  
		           //dataType:"json", 
		           success:function(data){
		           	console.log("返回的数据" + data);
		           	if(data == "loginsuccess")
		           		{
		           			findusers();
		           			//alert("登录成功！");
		           			$(".login-info").hide();//登录
		           			$(".orderarrange").show();
		           			orderarrange();//动态加载订单
		           		}
		           	else if(data == "loginfailed")
		           		alert("账号或密码错误！");
		           	else if(data == "emailused")
		           		alert("邮箱已被注册！");
		           	else if(data == "signupsuccess")
		           		{
		           			findusers();
		           			alert("注册成功！");
		           		}
		           	else if(data == "signupfailed")
		           		alert("注册失败！请稍后重试！");
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			});  
}
function findusers(){
		$.ajax({  
		           type: "post",  
		           url: "/phpbin/finduser.php",  
		           data: {"test":"nothing"},  
		           dataType:"json", 
		           success:function(data){
			           //console.log("返回的数据1111" + data[0].first_name);
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
function detective(name,value) //自动检测邮箱是否注册
		{ 
			$.ajax({  
		           type: "post",  
		           url: "/phpbin/detectiv.php",  
		           data: {"email":value},  
		           //dataType:"json", 
		           success:function(data){
		           	console.log("返回的数据" + data);
		           	if(name!="forget")//检测邮箱是否已注册
		           		{
		           			if(data == "email-used")
				           		alert("邮箱已被注册！！");
				           	else if(data == "email-unuse");
				           		//alert("邮箱可以使用！！");
		           		}
		           	else //忘记密码 检查是否注册
		           		{
		           			if(data == "email-used")
				           		;
				           	else if(data == "email-unuse")
				           		alert("邮箱未注册！！");
		           		}
		           	
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			});  
		}

function forget(name,value) //检测邮箱
		{ 
			email = $("input[name='forget']").val();
			if(email == "")
				return ;
			$.ajax({  
		           type: "post",  
		           url: "/phpbin/identify.php",  
		           data: {"email":email},  
		           //dataType:"json", 
		           success:function(data){
		           console.log("返回的数据" + data);

		           	if(data == "resetfailed")
				        alert("验证码发送失败，请稍后重试！！");
				    else 
				        alert("验证码：" + data);

		           	
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			});  
		}

function check(name,value)//自动检测邮箱格式，手机号格式，密码格式
		{ 
			actionkind = name;
			console.log( "(name)"+name +"(value)"+ value);
			firstname = $("input[name='user[first-name]']").val();
			lastname = $("input[name='user[last-name]']").val();
			phone = $("input[name='user[phone]']").val();
		    email = $("input[name='user[email]']").val();
			password = $("input[name='user[password]']").val();
			$.ajax({  
		           type: "post",  
		           url: "/phpbin/check.php",  
		           data: {"actionkind":actionkind,
				          "firstname":firstname,
				          "lastname":lastname,
				          "phone":phone,
		           		  "email":email,
		           		  "password":password},  
		           //dataType:"json", 
		           success:function(data){
		           	console.log("返回的数据" + data);
		           	if(actionkind=="user[email]")
		           		{
		           			if(data == "erroremail")
		           				{
		           					sign[3] = 0;
		           					alert("email格式错误！");
		           				}
		           			else{
		           					sign[3] = 1;
		           					detective("noforget",email);
		           				}
		           		}
		           	else if(actionkind=="user[password]")
		           		{
		           			if(data == "errorpassword")
		           				{
		           					sign[4]=0;
		           					alert("密码格式错误！");
		           				}
		           			else
		           					sign[4] = 1;
		           		}
		           	else if(actionkind=="user[phone]")
		           		{
		           			if(data == "errorphone")
		           				{
		           					sign[2] = 0;
		           					alert("手机号码格式错误！");
		           				}
		           			else
		           					sign[2] =1;
		           		}
		           	
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			});  
		} 



