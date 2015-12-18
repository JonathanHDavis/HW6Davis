var x = 5;
var y = 10;
var result = x + y;
console.log(result);
//basic adding number data types

var alert1 = "This";
var alert2 = "alert!";
alert(alert1 +  " " + "is" + " " + "an" + " " + alert2);
//adding strings to make an alert

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




