// this is a single-line comment

/* this is a multi-line comment
notice that the / and * are inverted when the comment is closed */

console.log("Monday");
console.log(3 * 6);
alert("Camilla");

var animal = "frog";
var delivered = true;
var score = 12;
var fullName = "John" + "Smith";
typeof(fullName);
var nameType = "string";

//If else

var age = 10;

if(age >= 7) {
    console.log("Greater than or equal to 7");
}

else {
    console.log("Less than 7");
}

//If...else if...else

var animal = "dog";

if(animal === "parrot") {
    console.log("The animal has two legs");
}

else if(animal === "cat") {
    console.log("The animal has four legs");
}

else {
    console.log("The animal has an unknown amount of legs");
}

//Loops

for(var count = 1; count <= 10; count++) {
    console.log(count);
}

for(var i = 5; i <= 25; i++) {
    console.log(i);
}

//Arrays

var colours = ["red", "blue", "green", "yellow"];

var numberOfColours = colours.length;
console.log(numberOfColours)

for(var i = 0; i < numberOfColours; i++) {
    console.log(colours[i]);
}