function sum(numA, numB) {
  return numA + numB;
}
// - Write a Function Expression
let sum = function (numA, numB) {
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let sum = (numA, numB) => {
  return numA + numB;
}
// - Execute the function
sum(20, 40);
// - Execute the function and store the return value in a variable
let sumofnumbers = sub(20, 40);
// - What is the typeof returnValue
typeof (sumofnumbers); // number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num) {
  return num * num;
}
// - Write a Function Expression
let square = function (num) {
  return num * num;
}
// - Write an Arrow Function without curly brackets(if possible)
let square = (num) => num * num;
// - Write an Arrow Function with curly brackets
let square = (num) => {
  return num * num;
}
// - Execute the function
square(12);
// - Execute the function and store the return value in a variable
let squareofnumbers = square(12);
// - What is the typeof returnValue
typeof (squareofnumbers);
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` 
if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}
// - Write a Function Expression
let isGreater = function (x, y) {
  if (x > y) {
    return true;
  }
  else {
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => x > y ? true : false ;
  // - Write an Arrow Function with curly brackets
  let isGreater = (x,y) => {
    if (x > y) {
      return true;
    }
    else {
      return false;
    }
  }
  // // - Execute the function
  isGreater(20, 15);
// - Execute the function and store the return value in a variable
let isGreaternumber = isGreater(20, 14);
// - What is the typeof returnValue
// number
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number) {
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd` ;
  }
}
// - Write an anonymous Function Expression
let oddOrEven = function (number) {
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}
// - Write an named Function Expression
let oddOrEven = function isOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) => number % 2 === 0  ? `${number} is even` :`${number} is odd`;
// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {
  if (number % 2 === 0) {
    return (`${number} is even`);
  } else {
    return `${number} is odd`;
  }
}
// - Execute the function
oddOrEven(302);
// - Execute the function and store the return value in a variable
let answer = oddOrEven(302);
// - What is the typeof returnValue
typeof (answer);
