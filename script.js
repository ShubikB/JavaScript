//This is a  single line Comment.\

/*

This is 
a 
multi-line comment

*/


console.log("Hello!!") 


// Lets learn VARIABLE
//  three ways to initialize a variable 
//  var, let and const


var name // declaring a variable
var name ="Shubik Bhatt"  // assignig variable
 

let add = "Sydney"
console.log(name,  add);


name ="sam"
console.log(name)  // Changes the value of name from Shubik Bhatt to Sam ( Overwriting Data)

const dob = "20/12/2000";
console.log(dob);


// Lets Learn Arthemitics

/*

+	Addition
 const ans = a + b;
-	Subtraction
*	Multiplication
 **	Exponentiation (ES2016)
 /	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

*/

let a = 5
let b = 10
let c = b

const sum  = a + b + c  // 5 + 6 + 6
const Subtraction = b - a
const multi = a*b
const expo = b ** a
const modolus = b % a 

a ++; // increments from 5 to 6  also known as postfix increment

b--;


console.log("The Sum is  " + sum + ".")
console.log("The difference of " + b + " and " + a + " is " + Subtraction + ".")
console.log("The product is  " + multi + ".")
console.log("The exponential  is  " + expo + ".")
console.log("The remainder  is  " + modolus + ".")
console.log("One increment is  " + a)
console.log( " The Decrement is  " + b)

console.log(++a) // using a prefix incrmement

console.log( 4+5 ) // can perform arthemetics

