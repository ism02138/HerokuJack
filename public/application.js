$(document).ready(function() {
	$("form#hit_form input").click(function() {
		$(document).on("click", "form#hit_form input", function() {
			$.ajax({
				type: 'POST', 
				url: '/player_hit'
			}).done(function(msg) {
				$("game").replaceWith(msg);
			});
			return false;
		});
	});

	$("form#stay_form input").click(function() {
		$(document).on("click", "form#stay_form", function () {
			$.ajax({
				type: 'POST',
				url: '/player_stay'
			}).done(function(msg) {
				$("#game").replaceWith(msg);
			});
			return false;
		});
	});
	$("form#computer_hit_form input").click(function() {
		$(document).on("click", "form#computer_hit_form", function () {
			$.ajax({
				type: 'POST',
				url: '/computer_hit'
			}).done(function(msg) {
				$("#game").replaceWith(msg);
			});
			return false;
		});
	});
});