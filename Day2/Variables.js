//variable - Name of memory location 

// Var (ES5), function scoped, reassing of data and redeclar of variable is possible

var location = "Chennai"  // "", '' , ``
location = "Pune" // reassign the data is possible
console.log("My location is",location);

var location = "Delhi" // redeclare the variable name
console.log(location);

// let (ESP6), Block scoped, reassing of data is possible and redeclar of variable is not possible

let firstName = "Bala"
console.log("My Name is",firstName);
firstName = "Balamurugan"
console.log("My full name is",firstName);

// Const  reassing of data and redeclar of variable is not possible
const age = 36
console.log(age);
//age = 37 //TypeError: Assignment to constant variable.
console.log(age);


//type of variable
var i = "Bala"
console.log(typeof(i));

var i = 10
console.log(typeof(i));

var i = false
console.log(typeof(i));





