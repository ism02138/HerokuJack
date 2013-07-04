$(document).ready(function() {
	$(document).on("click", "form#hit_form input", function() {
		
		$.ajax({
			type: 'POST', 
			url: '/player_hit'
		}).done(function(msg) {
		alert("player hits!");
			$("#game").replaceWith(msg);
		});
		return false;
	});

	$(document).on("click", "form#stay_form input", function () {
		alert("player stays!");
		$.ajax({
			type: 'POST',
			url: '/player_stay'
		}).done(function(msg) {
			$("#game").replaceWith(msg);
		});
		return false;
	});

	$(document).on("click", "form#computer_hit_form input", function () {
		alert("computer hits!");
		$.ajax({
			type: 'POST',
			url: '/computer_hit'
		}).done(function(msg) {
			$("#game").replaceWith(msg);
		});
		return false;
	});
});