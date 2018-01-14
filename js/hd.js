$(document).ready(function() {
	if(screen.width>=760){
		$(window).scroll(function(){
			//console.log($(window).scrollTop());
			$(".header").css({
				position: 'fixed',
				top: '0',
				background: '#fff',
			});
			if($(window).scrollTop()>60){
				$(".header").css({
					position: 'fixed',
					top: '0',
					background: '#fff',
				});

			}
			else{
				$(".header").css({
					position: 'relative',
					background: '#fff',
					opacity: '1'
				});
			}
		});
	}


	// $(window).scroll(function(){
	// 	console.log($(window).scrollTop());
	// 	$(".header").css({
	// 		position: 'fixed',
	// 		top: '0',
	// 		background: '#fff',
	// 	});
	// 	if($(window).scrollTop()>60){
	// 		$(".header").css({
	// 			position: 'fixed',
	// 			top: '0',
	// 			background: '#fff',
	// 		});

	// 	}
	// 	else{
	// 		$(".header").css({
	// 			position: 'relative',
	// 			background: '#fff',
	// 			opacity: '1'
	// 		});
	// 	}
	// });
});