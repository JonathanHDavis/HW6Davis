$(document).ready(
	function() {
		$("h1").animate({fontSize: "75px"}, 3000)
	});
//grows when page loads

$("#box").click(
	function(){
		alert("I'm a red box!");
	}
	);
//click event that results in an alert