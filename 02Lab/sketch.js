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

//This declares an array that is named friends which has nothing in i tyet

let friends = [];

//This lines uses the array method/function push to place stuff inside an array

friends.push(friend01, friend02, friend03, friend04, friend05);

console.log(friends);

//This is how we access an object in an array and the value of its property called age

console.log(friends[1].age);

function calculateAverage(array){
	let total = 0;
	for(let i = 0; i < array.length; i++){
		total = total + array[i];
	}
	return total/array.length
}

function calculateMedian(array){
	
}

//This is a declaritive statement defining a ne function called doSomething
//That expects a number to be passed as a parameter

function doSomething(num) {
	for (let i = 0; i < num; i++) {
		console.log("doing Something with " + i);
	}

};

// doSomething(4);

let addUp = (num1, num2) => num1 + num2;

// console.log(addUp(3,4));

let names = friends.map( friend => friend.name);

let bowlers = friends.filter( friend => friend.bowling == true );
console.log(bowlers);

let bowlerAge = bowlers.map( friend => friend.age);
console.log(calculateAverage(bowlerAge));

let ages = friends.map( friend => friend.age);
averageAge = calculateAverage(ages);
console.log("The average is " + averageAge);