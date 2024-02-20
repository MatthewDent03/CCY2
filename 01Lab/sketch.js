let johnsFriends;
// This declares a variable named age and assigns a value of 23
let age=23;
// This outputs age to the console in Chrome
console.log(age)
// This will output the array johnsFriends to the console
console.log(johnsFriends);
johnsFriends = ["David","Peter","Mary"]
console.log(johnsFriends);
// This will output to the console the secon item in the array using
// the array name followed by the index value in hard brackets
console.log(johnsFriends[1])
// This is assigning a variable name to an object literal
let friend01 = {name:"john",age:23,bowling:true};
let friend02 = {name:"David",age:32,bowling:true};
let friend03 = {name:"Mary",age:22,bowling:false};
// This declares an array named friends which has nothing in it yet
let friends = [];
// Theses lines uses the array method/function push to place stuff inside an array
friends.push(friend01);
friends.push(friend02)
friends.push(friend03)
console.log(friends)
// This is how we access an object in an array and the value of its 
// property called age
console.log(friends[2].age);