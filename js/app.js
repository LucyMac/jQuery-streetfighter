$( document ).ready(function() {
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
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show().animate( {
					'margin-left':'600'
				}, 500, 'swing', function() {
					this.remove();
					this.css('margin-left','-180');
				}
			);
	})
	.mouseup(function() {
			$('.ryu-ready').show();
			$('.ryu-throwing').hide();
	})
	.keydown(function (){
			$('.ryu-cool').show();
	})




function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}







});