$(document).ready(
	function() {
		$("h1").animate({fontSize: "75px"}, 2000);
	}
	);
//grows when page loads

$(document).ready(
	function() {
		$("#goodbye").fadeOut(6000);
	}
	);
//fades slowly over 6 seconds when page loads

$("#slide").click(
	function() {
		$("#slide").slideUp(3000);
	}
	);
//click it and it fades by sliding up

$("#box").click(
	function(){
		alert("I'm a red box!");
	}
	);
//click event that results in an alert


