var x = 5;
var y = 10;
var result = x + y;
console.log(result);
//basic adding number data types

/*
var alert1 = "This";
var alert2 = "alert!";
alert(alert1 +  " " + "is" + " " + "an" + " " + alert2);
//adding strings to make an alert
*/

function change() {
	document.getElementById("surprise").innerHTML = "BOO! Didn't see THAT coming";
}
//a change function

var superhero = ["Iron Man", "Captain America", "Thor"];
//an array, to be used in object below

var movies = {octane: "Die Hard", comedy: "Anchorman", superhero: superhero};
console.log(movies.octane);
console.log(movies.comedy);
console.log(superhero[1]);
//an object

"this string" === "this string"
console.log("this string" === "that string");
//string testing

console.log((15-6) === (9));
//number testing

console.log("Godfather 3" !== "Godfather 1 and 2");
//string not equal to

console.log((5) > (10));
//number greater than

if("I like pizza" !== "But I also like burgers"){
	console.log("Hi there everyone!");
}
//an if with strings

if((5 !== 5)){
	console.log("This won't be seeeeeen")
} else {
	console.log("This logic stuff is strange");
}
//an else with numbers

/*
function describeMe(name, adjective){
	return name + " is " + adjective;
}
alert(describeMe("Jonathan", "awesome!"));
*/
//a function that takes two arguments

function math(number) {
	if (number === 2) {
		return ("Correct! 1 + 1 = 2! You are so smart")
	} else {
		return ("WOW. You don't know 1 + 1? You are dumb.")
	}

}

alert(math(3));
//function that has one argument and and if/then

function favorite(animal) {
	if (animal === "dog") {
		return "Great choice, dogs are the BEST!";
	} else if (animal === "cat") {
		return "Really, a cat? You're a terrible person...";
	} else {
		return "You're stupid for not choosing dog, but at least you didnt say cat."
	}
}

console.log(favorite("goldfish"));
//if else function







