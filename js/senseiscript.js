$(document).ready(function () {
	$win = $(window);
	$bars = $('.fa-bars');
	$times = $('.fa-times');
	$slidebar = $('#sidebar-slider .col-md-2  ');
	// $slidebar2 = $('.fa-angle-right');


// bars_onclick($win,$slidebar);

// $win.resize(function(){
// 	bars_onclick($win,$slidebar);
// })




	$bars.click(function () {
		$times.show();
		$slidebar.show();
		$bars.hide();
		
	})

	$times.click(function(){
		$times.hide();		
		$slidebar.hide();
		$bars.show();
	})
	
	$win.resize(function($times){
		if ($win.width() >= 768) {
			$slidebar.hide();
			$times.hide();
			$bars.hide();
					
		}
		else{

			$slidebar.hide();
			$times.hide();
			$bars.hide();
		}
	})

})

// function bars_onclick($win,$slidebar){
// 	if ($win.width() < 768) {
// 		$times.css({display:"none"});
// 		// $bars.css({display:"none"});
// 		$slidebar.css({left:"-500px"});$slidebar2.css({left:"-500px"});

// 	}
// 	else{

// 		$slidebar.css({left:"0px"});$slidebar2.css({left:"0px"});
// 	}
// }






// 	bars_onclick($win,$slidebar);

// 	$win.resize(function(){
// 		bars_onclick($win,$slidebar);
// 	})

// 	$times.click(function(){
// 		$slidebar.barsClass('bars-left');
// 	})
// })
// function bars_onclick(win,$slidebar){
// 	if ($win.width() >= 768) {
// 		$times.show();

// 		// $slidebar.css({left:"-200px"});
// 	}
// 	else{
// 		$slidebar.hide();
// 		// $slidebar.css({left:"0"});

// 	}
// }