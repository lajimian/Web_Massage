
$(document).ready(function(){
	$(".roll").click(function(){
	  // $(".header-menu").fadeOut("fast");
	  $(".header-menu").animate(
	  	{
	  	height:"0",
	  	width:"0" 
	    },"10000",
	  	function(){
	      // $(".header-menu").hide(),
	      $(function () {
	      if ((screen.width >= 0) && (screen.width <= 519)) {
	      	$(".header-menu").hide(),
	        $(".header-menu").css({'height': "99%",'width':"80%"})
	      }
	      if ((screen.width >= 520) && (screen.width <= 1023)) {
	      	$(".header-menu").hide(),
	        $(".header-menu").css({'height': "120%",'width':"80%"})
	      }
		      })
	    }
	  );
	  $(".bg").fadeOut("fast");
	});

	$(".showitem").click(function(){
	  $(".header-menu").fadeIn("fast");
	  $(".bg").fadeIn("fast");
	});
	
});