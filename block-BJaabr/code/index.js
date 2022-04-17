// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and
`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num) {
  return num;
}
 
// - Write a Function Expression
let addOne = function(num){
  return num;
}
// - Write an Arrow Function without curly brackets(if possible)
let addOne = (num) => num; // implicit return
// - Write an Arrow Function with curly brackets
let addOne = (num) => {
  return num;
}
// - Execute the function
addOne(14);
// - Execute the function and store the return value in a variable.
let returns = addOne(14);
// - What is the typeof returnValue
typeof(addOne); 
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(num1){
  return num1;
}
// - Write a Function Expression
let substractOne = function(num1) {
  return num1;
}
// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (num1)=> num1;
// - Write an Arrow Function with curly brackets
let substractOne = (num) => {
  return num;
}
// - Execute the function
substractOne(20);
// - Execute the function and store the return value in a variable.
let finalvalue = substractOne(20);        
// - What is the typeof returnValue
typeof(finalvalue);
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB) {
  return numA + numB ;
}

// - Write a Function Expression
let sum = function (numA ,numB) {
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA + numB ;
// - Write an Arrow Function with curly brackets
let sum = (numA ,numB) => {
  return numA + numB ;
}

// - Execute the function
sum(20,40);
// - Execute the function and store the return value in a variable
let sumofnumbers = sub(20,40);
// - What is the typeof returnValue
typeof(sumofnumbers);
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square (num) {
return num * num ;
}
// - Write a Function Expression
let square = function(num) {
  return num * num;
}
// - Write an Arrow Function without curly brackets(if possible)
let square = (num) =>  num * num ;
// - Write an Arrow Function with curly brackets
let square = (num) => {
  return num * num ;
}
// - Execute the function
square(12);
// - Execute the function and store the return value in a variable
let squareofnumbers = square(12);
// - What is the typeof returnValue
typeof(squareofnumbers);
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` 
if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y) {
  if(x > y) {
    return true;
  } else {
    return false;
  }
}
// - Write a Function Expression
let isGreater = function(x,y) {
  if(x>y)  return true;
  else return false;
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x,y) =>  
// - Write an Arrow Function with curly brackets
// let isGreater = (x,y) => {
//   if(x>y)  return true;
//   else return false;
// }
// // - Execute the function
isGreater(20,15);
// - Execute the function and store the return value in a variable
let isGreaternumber = isGreater(20,14);
// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number) {
    if(num % 2 === 0) {
      return (`${number} is even`);
    } else {
      return false;
    }
}
// - Write an anonymous Function Expression
let oddOrEven = function(number){
    if(num % 2 === 0) {
      return (`${number} is even`);
    } else {
      return false;
    }
}
// - Write an named Function Expression
let oddOrEven = (number)=>{
  if(num % 2 === 0) {
    return (`${number} is even`);
  } else {
    return false;
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets
let oddOrEven = (number)=>{
  if(num % 2 === 0) {
    return (`${number} is even`);
  } else {
    return false;
  }
}
// - Execute the function
oddOrEven(302);
// - Execute the function and store the return value in a variable
let answer = oddOrEven(302);
// - What is the typeof returnValue
typeof(answer);