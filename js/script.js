$(document).ready(function () {
	$win = $(window);
	$bars = $('.fa-bars');
	$times = $('.fa-times');
	$slidebar = $('#sidebar-slider .col-md-2  ');
	$slidebar2 = $('.fa-angle-right');


bars_onclick($win,$slidebar,$slidebar2);

$win.resize(function(){
	bars_onclick($win,$slidebar,$slidebar2);
})

$bars.click(function(){
	$slidebar.toggleClass('toggle-left');
	$slidebar2.toggleClass('toggle2-left');
})
$bars.click(function(){
	$slidebar.css({left:"-500px"});$slidebar2.css({left:"-500px"});
})
$bars.click(function(){
	$slidebar.css({display:"block"});
	$times.css({display:"block"});
	$bars.css({display:"none"});
})
$times.click(function(){
	$slidebar.css({display:"none"});
	$times.css({display:"none"});
	$bars.css({display:"block"});
})

})

function bars_onclick($win,$slidebar,$slidebar2){
	if ($win.width() < 768) {
		$times.css({display:"none"});
		// $bars.css({display:"none"});
		$slidebar.css({left:"-500px"});$slidebar2.css({left:"-500px"});

	}
	else{

		$slidebar.css({left:"0px"});$slidebar2.css({left:"0px"});
	}
}


	// $bars.click(function () {
	// 	$times.show();
	// 	$bars.hide();
	// 	$slidebar.show();
	// })

	// $times.click(function(){
	// 	$times.hide();
	// 	$bars.show();
	// 	$slidebar.hide();
	// })
	// $win.resize(function(){
	// 	if ($win.width() >= 768) {
	// 		$times.hide();
	// 		$sidebar.hide();
	// 		$bars.show();
	// 	}
	// 	else{
	// 		$times.hide();
	// 		$sidebar.show();
	// 		$bars.hide();
	// 	}
	// })








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