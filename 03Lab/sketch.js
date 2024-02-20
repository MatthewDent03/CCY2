let myFriends;

console.log("Hi");

//declaring variable age and assigning value int 23

let age = 23;

//these are outputting the variable's values to the console in the web browser

console.log(age);

console.log(myFriends);

myFriends = ["David", "Peter", "Mary"];

console.log(myFriends);

//This will output to the console the second item in the array using
//the array name followed by the index value in hard brackets


console.log(myFriends[1]);

//This is assigning a variable name to an object literal

let friend01 = {
	name: "john", age: 57, bowling: true
};

let friend02 = {
	name: "Simon", age: 77, bowling: true
};

let friend03 = {
	name: "Amy", age: 20, bowling: false
};

let friend04 = {
	name: "Sally", age: 14, bowling: true
};

let friend05 = {
	name: "Tom", age: 6, bowling: false
};

let angle = 0;

function setup() {
	createCanvas(500,500);
	// noLoop();
	rectMode(CENTER);
	angleMode(DEGREES);
}


function draw() {
	background(245);
	translate(250, 250);
	rotate(angle);
	fill(200, 0, 0);
	noStroke();
	rect(0, 0, 100, 100);
	angle++
}