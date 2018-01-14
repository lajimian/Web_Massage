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
	long = "";
	price = "";
	var a = lengths.length,i = 0,j = 0;
	i = lengths.indexOf('-') ;
	j = lengths.indexOf('$') ;
	for(var m = 0;m < i-1;++m)
		long+=lengths.charAt(m);
	for(var m = j+1;m < a;++m)
		price+=lengths.charAt(m);
}
function copy(){
	getprice();
	order.email = email;
	order.datas = month+"/"+day + "/" + "2017";
	order.time = hour+":"+minutes+" "+ amorpm;
	order.amorpm =  amorpm;
	order.session = session;
	order.lengths = lengths;
	order.price = "$"+price;
	order.long = long;
	order.types = types;
	order.province = province;
	order.stree1 = street1;
	order.stree2 = street2;
	order.code = code;
	order.parking = parking;
}
////////动态转换
$(document).ready(function(){
	//$(".forgetpass").hide();//忘记密码
	//$(".signup").hide();  //注册
	//$(".book-order").hide();
	//$(".first-book").hide();  //1



//测试需要	
	$(".second-book").hide();  //2
	$(".third-book").hide();  //3
	$(".four-book").hide();   //41
	$(".four-book2").hide();  //42
	$(".book-complete").hide();
// //测试需要	可删除
// 	$(".first-book").hide();  //1
// 	$(".second-book").hide();  //2
// 	$(".third-book").hide();  //3
// 	//$(".four-book").hide();   //41
// 	$(".four-book2").hide();  //42



	$(".login-info").hide();//登录
	$(".choosetime").hide();
	$(".whichmonth").hide();
	$(".whichmonth").eq(0).show();//先显示六月份
	$(".choosedate").hide();
	$(".forget").click(function(event) {
		//$(".login-info").hide();
		window.open("../forgetpass.html");
		//$(".forgetpass").show();
	});
//////////////////////////////////////////////////////////////////////
	
	$(".uup").click(function(event) {
		event.stopPropagation();
		num = $(this).parent().index();
		hour = $(".choose-hour").text();
		minutes = $(".choose-minutes").text();
		amorpm = $(".choose-amorpm").text();
		//console.log(hour + minutes + amorpm);
		if(0 == num){ //小时
			if(hour<12&&hour>=1)
				++hour;
			$(".choose-hour").text(hour);
		}else if(1 == num){//分钟
				if(minutes<60&&minutes>=0)
					++minutes;
				$(".choose-minutes").text(minutes);
			}
			else if(2 == num){//上下午
				if(amorpm=="AM")
					amorpm="PM";
				else
					amorpm="AM";
				$(".choose-amorpm").text(amorpm);
			}
	});
	$(".ddown").click(function(event) {
		event.stopPropagation();
		num = $(this).parent().index();
		hour = $(".choose-hour").text();
		minutes = $(".choose-minutes").text();
		amorpm = $(".choose-amorpm").text();
		//console.log(hour + minutes + amorpm);
		if(0 == num){ //小时
			if(hour<=12&&hour>1)
				--hour;
			$(".choose-hour").text(hour);
		}else if(1 == num){//分钟
				if(minutes<59&&minutes>0)
					--minutes;
				$(".choose-minutes").text(minutes);
			}
			else if(2 == num){//上下午
				if(amorpm=="AM")
					amorpm="PM";
				else
					amorpm="AM";
				$(".choose-amorpm").text(amorpm);
			}
	});
	$(".first-choosetime").click(function(event) {
		event.stopPropagation();
		$(".choosetime").show();
		$(".choosedate").hide();

		active = true;
	});
//////////////////////////////////////////////////////////////////////
	$(".lleft").click(function(event) {
		event.stopPropagation();
		month = $(".month").text();
		if(month>6 )
			month--;
		$(".month").text(month);
		$(".whichmonth").hide();
		$(".whichmonth").eq(month-6).show();
	});
	$(".rright").click(function(event) {
		event.stopPropagation();
		month = $(".month").text();
		if(month<12 )
			month++;
		$(".month").text(month);
		$(".whichmonth").hide();
		$(".whichmonth").eq(month-6).show();
	});
	$(".week").hover(function() {
		week = $(this).index();
		$(".weeks").css({"border-color":  "#fff",});
		$(".weeks").eq(week).css({"border-color":  "rgb(100,210,163)",});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
	$(".week").click(function(event) {
		day = $(this).text();
		$(".first-choosedata").attr("value","2017 / "+ month +" / " + day +" ");
		$(".choosedate").hide();
	});
	$(".first-choosedata").click(function(event) {
		event.stopPropagation();
		$(".choosedate").show();
		$(".choosetime").hide();
	});
///////////choosesession-down
	$(".choosesession-contain").hide();
	$(".choosesession-down").click(function(event) {
		event.stopPropagation();
		$(".choosesession-contain").show();
		$(".chooselength-contain").hide();
		$(".choosetype-contain").hide();
	});
	$(".choosesession-contain li").click(function(event) {
		session = $(this).text();
		if($(this).index() == 1)
			{
				lengths = "60 minutes - $130";
				$(".second-length").attr("value",lengths);
			}
		else{
				lengths = "60 minutes - $65";
				$(".second-length").attr("value",lengths);
		}
		$(".second-choossession").attr("value",session);
		$(".choosesession-contain").hide();
	});
///////////chooselength-down
	$(".chooselength-contain").hide();
	$(".chooselength-down").click(function(event) {
		event.stopPropagation();
		if(session == "Single - 1 therapist")
			$(".chooselength-contain").eq(0).show();
		else
			$(".chooselength-contain").eq(1).show();
		$(".choosesession-contain").hide();
		$(".choosetype-contain").hide();
	});
	$(".chooselength-contain li").click(function(event) {
		lengths = $(this).text();
		$(".second-length").attr("value",lengths);
		$(".chooselength-contain").hide();
	});
///////////choosetype-down
	$(".choosetype-contain").hide();
	$(".choosetype-down").click(function(event) {
		event.stopPropagation();
		$(".choosetype-contain").show();
		$(".choosesession-contain").hide();
		$(".chooselength-contain").hide();
	});
	$(".choosetype-contain li").click(function(event) {
		types = $(this).text();
		$(".second-type").attr("value",types);
		$(".choosetype-contain").hide();
	});
///////////.worker
	 $(".second-info").hide();
	$(".worker").click(function(event) {
		event.stopPropagation();
		if(session == "Single - 1 therapist")
			workernum = 1;
		else
			workernum = 2;
		++count;
		if(1 == workernum)
			{
				if(1 == count)
				{
					$(this).children('img').css({'border-color': 'rgb(100,210,163)',});
					workername1 = $(this).children('ul').text();
					showsecondinfo(workername1);
				}
			}
		else
			{
				if(1==count){
					$(this).children('img').css({'border-color': 'rgb(100,210,163)',});
					workername1 = $(this).children('ul').text();
					showsecondinfo(workername1);
				}
				else if(2==count){
					$(this).children('img').css({'border-color': 'rgb(100,210,163)',});
					workername2 = $(this).children('ul').text();
					showsecondinfo(workername2);
				}
			}
		order.workername1 = workername1;
		order.workername2 = workername2;
	});
function showsecondinfo(names){
	$.ajax({  
		           type: "post",  
		           url: "/phpbin/userinfo.php",  
		           data: {"name":names},  
		           dataType:"json", 
		           success:function(data){
			           console.log("返回的数据信息" + data[0].introduce);	 
			            $(".second-info").show();
			            $(".second-info-name").text(names);
			            $(".second-info-intro").text(data[0].introduce);          
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			}); 
}
///////////.book-3
	$(".new input").click(function(event) {
		//isfirstsignup = true;
		$(".signup").show();  //注册
		$(".login-info").hide();//登录
	});
	$(".old input").click(function(event) {
		//isfirstsignup = false;
		$(".signup").hide();  //注册
		$(".login-info").show();//登录
	});
///////////.
///////////////////已获取的值
	// var num=0,hour=5,minutes=0,amorpm="PM ";  //选择时间 默认pm
	// var month = 6,week = 2,day = 1; //选择日期 默认6月1号
	$(".book-order li").eq(0).css({
		"font-size": '2.8em',
		"color": '#aaa',
	});
	var whichbook = 1;
	$(".first-continue").click(function(event) {
		console.log(month +" / "+ day +"   " +hour +" : " + minutes +" "+ amorpm);
		whichbook = 2;
		$(".book-order li").css({
			"font-size": '1.8em',
			"color": 'rgb(204,204,204)',
		});
		$(".book-order li").eq(1).css({
			"font-size": '2.8em',
			"color": '#aaa',
		});
		$(".first-book").hide();
		$(".second-book").show();  //2
		$(".third-book").hide();  //3
		$(".four-book").hide();   //41
		$(".four-book2").hide();  //42
		$('body,html').scrollTop(0);
	});
///////////////////已获取的值
	// var types = "Swedish Massage";
	// var lengths = "60 minutes - $65";
	// var session = "Single - 1 therapist";
	// var workername1 = "null",workername2 = "null",workernum = 1,count = 0;
	$(".second-continue").click(function(event) {
		console.log(session +"   "+ types +"   "+ lengths +"   "+ workername1 +"   "+ workername2);
		if(session == "Single - 1 therapist"){
			if(workername1 == "null")
				{
					alert("Please choose at least one therapist!");
					return ;
				}

			}else if(session == "Single - 2 therapists"){
				if(workername1 == "null" || workername2 == "null")
					{
						alert("Please choose two therapist!");
						return ;
					}
			}

		whichbook = 3;
		$(".book-order li").css({
			"font-size": '1.8em',
			"color": 'rgb(204,204,204)',
		});
		$(".book-order li").eq(2).css({
			"font-size": '2.8em',
			"color": '#aaa',
		});
		$(".first-book").hide();
		$(".second-book").hide();  //2
		$(".third-book").show();  //3
		$(".four-book").hide();   //41
		$(".four-book2").hide();  //42
		$('body,html').scrollTop(0);
	});
	function showbookorder(n){
		$(".book-order li").css({
			"font-size": '1.8em',
			"color": 'rgb(204,204,204)',
		});
		$(".book-order li").eq(n).css({
			"font-size": '2.8em',
			"color": '#aaa',
		});
	}
///////////.
	$(".back").click(function(event) {
		if(whichbook >1)
			{
				whichbook--;
				showbookorder(whichbook-1);
			}
		if(1==whichbook){
			$(".first-book").show();
			$(".second-book").hide();  //2
			$(".third-book").hide();  //3
			$(".four-book").hide();   //41
			$(".four-book2").hide();  //42	
		}
			else if(2==whichbook){
					$(".first-book").hide();
					$(".second-book").show();  //2
					$(".third-book").hide();  //3
					$(".four-book").hide();   //41
					$(".four-book2").hide();  //42	
				}
				else if(3==whichbook){
					$(".first-book").hide();
					$(".second-book").hide();  //2
					$(".third-book").show();  //3
					$(".four-book").hide();   //41
					$(".four-book2").hide();  //42	
				}else if(4==whichbook){
					$(".first-book").hide();
					$(".second-book").hide();  //2
					$(".third-book").hidee();  //3
					$(".four-book").show();   //41
					$(".four-book2").hide();  //42	
				}
		$('body,html').scrollTop(0);
	});
///////////.
$(".book-but").click(function(event) {
	street1 = $("input[name='street1']").val();
	street2 = $("input[name='street2']").val();
	province = $("input[name='province']").val();
	code = $("input[name='code']").val();
	parking = $("textarea[name='parking']").val();
	copy();
	console.log(order);
	// $(".book-order").hide();
	$(".first-book").hide();  //1	
	$(".second-book").hide();  //2
	$(".third-book").hide();  //3
	$(".four-book").hide();   //41
	$(".four-book2").show();  //42
	fourbook2change();
	//$(".book-complete").show();
	//$(".youremail").text(order.email);
	$('body,html').scrollTop(0);
});
///////////.
$(".four-book2-button").click(function(event) {
	//copy();
	$(".book-order").hide();
	console.log(order);
	orderdeal();//提交订单
});
////////////////////
	$(document).click(function(event) {
				$(".choosetime").hide();
				$(".choosedate").hide();

				$(".choosesession-contain").hide();
				$(".chooselength-contain").hide();
				$(".choosetype-contain").hide();

				$(".worker").children('img').css({'border-color': '#fff',});
				workername1 = "null";
				workername2 = "null";
				count = 0;

				if(amorpm != "PM ")
    				$(".first-choosetime").attr("value",hour +" : " + minutes +" "+ amorpm);
    			amorpm = "PM ";
    			active = false;
	});
	
});











///////////.firstname,lastname,phone,email,password 数据库相关
//var isfirstsignup = true;
var issignupsucceed = false;
function thirdcontinue() { ////////注册！！！
				console.log("注册！！！" +"   "+ firstname +"   "+ lastname +"   "+ phone +"   "+ email+"   "+ password);
				if(issignupsucceed)
					{
						whichbook = 5;
						$(".book-order li").css({
							"font-size": '1.8em',
							"color": 'rgb(204,204,204)',
						});
						$(".book-order li").eq(3).css({
							"font-size": '2.8em',
							"color": '#aaa',
						});
						$(".first-book").hide();
						$(".second-book").hide();  //2
						$(".third-book").hide();  //3
						$('body,html').scrollTop(0);
						// if( true == isfirstsignup)
						// 	{
							$(".four-book2").hide();
							$(".four-book").show();  //42
								// $(".four-book").hide();
								// $(".four-book2").show();   //41
							// }
					}	
			};
function fourbook2change(){
	copy();
	$(".finally-order li").eq(0).text(order.datas+"  "+ order.time + " " +order.amorpm);
	$(".finally-order li").eq(1).text(order.session);
	if(order.session == "Single - 1 therapist")
	$(".finally-order li").eq(2).text(order.types+"/"+ order.long + "/" +order.workername1);
	else 
	$(".finally-order li").eq(2).text(order.types+"/"+ order.long + "/" +order.workername1+" "+order.workername2);
	//$(".finally-order li").eq(3).text(order.street1+" street,"+ order.code);
	$(".allcost").text(order.price);
}	
function third2continue() {
				console.log("登录！！！" +"   "+ email+"   "+ password);
				if(issignupsucceed)
					{
						whichbook = 4;
						$(".book-order li").css({
							"font-size": '1.8em',
							"color": 'rgb(204,204,204)',
						});
						$(".book-order li").eq(3).css({
							"font-size": '2.8em',
							"color": '#aaa',
						});
						$(".first-book").hide();
						$(".second-book").hide();  //2
						$(".third-book").hide();  //3
						$('body,html').scrollTop(0);
						// if( true == isfirstsignup)
						// 	{
						// 		$(".four-book").hide();
						// 		$(".four-book2").show();   //41
						// 	}
						// else
						// 	{
								$(".four-book2").hide();
								$(".four-book").show();  //42
							// }
					}	
			};

function showUser(sname,value)
		{ 
			actionkind = "signup";
			firstname = $("input[name='user[first-name]']").val();
			lastname = $("input[name='user[last-name]']").val();
			phone = $("input[name='user[phone]']").val();
			//if(phone == "" && name!= "signin") return;
			console.log("showuser!!"+ "(name)"+sname +"(value)"+ value);
			if(sname=="login"){
				actionkind = "login";
				email = $("input[name='login-email']").val();
				password = $("input[name='login-password']").val();
				console.log("登录！！！" +"邮箱"+ email +"密码"+ password);
			} else if(sname=="signup"){
				if(sign[2]==0) 
					{alert("手机号格式错误！"); return; }
					else if(sign[4]==0) 
						{alert("密码格式错误！"); return ;}
						else if(sign[3]==0) 
							{alert("邮箱格式错误！"); return ;}
				actionkind = "signup";
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
			console.log("登录界面"+actionkind +":"+ firstname+":" + phone+":" + email+":" + password) 
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
		           			issignupsucceed = true;
		           			alert("登录成功！");
		           			third2continue();
		           		}
		           	else if(data == "loginfailed")
		           		alert("账号或密码错误！");
		           	else if(data == "emailused")
		           		alert("邮箱已被注册！");
		           	else if(data == "signupsuccess")
		           		{
		           			issignupsucceed = true;
		           			alert("注册成功！");
		           			thirdcontinue();
		           		}
		           	else if(data == "signupfailed")
		           		alert("注册失败！请稍后重试！");
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			});  
		}//登录注册相关

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


function orderdeal(){
		$.ajax({  
		           type: "post",  
		           url: "/phpbin/orderdeal.php",  
		           data: {"order":order},  
		           //dataType:"json", 
		           success:function(data){
		           console.log("返回的数据" + data);
		           if( "ordercreatesuccess" == data)
		           	{
		           		console.log("订单创建成功！！");
		           		alert("订单创建成功！！")
		           		ordercomplete();
		           	}
		           else
		           	{
		           		console.log("订单冲突！！");
		           		alert("订单冲突！！");
		           	}
		           }, 
			       error:function() {console.log("error") },
		           complete: function(data){}
			}); 
}
function ordercomplete(){
	$(".book-order").hide();
	$(".first-book").hide();  //1	
	$(".second-book").hide();  //2
	$(".third-book").hide();  //3
	$(".four-book").hide();   //41
	$(".four-book2").hide();  //42
	$(".book-complete").show();
	$(".youremail").text(order.email);
	$('body,html').scrollTop(0);
}
