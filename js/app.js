$(document).ready(function() {
	$("div.ryu")
	.hover(
			function() {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}, function () {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
	})
	.mousedown(
			function() {
			//playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show().animate( {
					'left':'600px'
				}, 500, function() {
					$(this).hide();
					$(this).css('left','-180px');
				}
			);
	})

	.mouseup(function() {
			$('.ryu-ready').show();
			$('.ryu-throwing').hide();
			//$('.hadouken').hide();
	})
	
	.keydown(function () {
		$('.ryu-still').hide();
		$('.ryu-cool').show();
	})
	.keyup(function () {
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	})

});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}