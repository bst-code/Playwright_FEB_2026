
//Funtion without parameter

// void - it wont return anything - Ex checking balance in ATM machine
function add()
{
let i = 10 // hard code 
let j = 20

let sum = i + j
console.log(sum);
}

//Return type - It retuns number - ex : widthdraw money from ATM 
function add_3()
{
 let i = 33;
 let j = 1

 let output = i +j
 console.log(output);
 return output
}

//parametrized method
function add_1(i, j)
{
let sum = i + j
console.log(sum);
}

//parametrized method with default value
function add_2(i = 90, j=70)
{
let sum = i + j
console.log(sum);
}



add()
add()
add()
add()

add_1(1,2)
add_1(12,15)
add_1(30,70)

add_2()
add_2(30)
add_2(80, 10)

let age = add_3()
console.log("My current age is ",age);

//calculator.js
//add() - no paramter, void
//sub() - paramter - void
//mutiply() - parameter with default value - number
//divide() - parameter and returns number
//percentage() - no parameter and returns number
