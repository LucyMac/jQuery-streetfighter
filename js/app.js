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
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').show();
	})
	.mouseup(function() {
			$('.ryu-ready').show();
			$('.ryu-throwing').hide();
	});









});