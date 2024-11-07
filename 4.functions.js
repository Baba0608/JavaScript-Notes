// functions are used to reuse the code, to make the code readable etc.

// We define a function using the keyword function
// Ex:
// declaring the function
function sum(a, b) {
  // logic
  let c = a + b;
  console.log(c);
}

// calling the function
sum(10, 20);

// In the above exampe `sum` is the function name (which we will use to call the function later)
// a , b are the parameters of that function.
// 10 , 20 are arguments.

// While defining the function we use the term parameters(a , b). But while calling the function they are known as arguments(10 , 20  {the actual values}).

// We define the function once, and can call the function multiple times with different arguments.
sum(100, 200);
sum(50, 80);
sum(19, 23);

// Ex:-
// write a function which takes marks of student and print the grade based on the following logic
// marks >= 90  =>  Grade A
// 90 > marks >= 75  => Grade B
// 75 > marks >= 60  => Grade C
// 60 > marks >= 45  => Grade D
// less than 45  => Fail

function getGarde(marks) {
  if (marks >= 90) {
    console.log("Grade A");
  } else if (marks >= 75 && marks < 90) {
    console.log("Grade B");
  } else if (marks >= 60 && marks < 75) {
    console.log("Grade C");
  } else if (marks >= 45 && marks < 60) {
    console.log("Grade D");
  } else {
    console.log("Fail");
  }
}

getGarde(85);

// ---------------------------------------------------------------------------------------
// return statement
// return statement is used to return a value from a function. When a return statement is executed, then function will return a value and stops execution of the function.

// Why do we need to return a function ?
// When we want to call a function which will return a value and that value is used by another function then we should definitely return the function.
// Ex:-
function magicNumber(n) {
  // product of first n numbers minus sum of first n numbers is a magic number
  let a = sumOfFirstNNumbers(n); // calling the function sumOfFirstNNumbers
  let b = productOfFirstNNumbers(n); // calling the function productOfFirstNNumbers
  return b - a;
}

function sumOfFirstNNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function productOfFirstNNumbers(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

let ans = magicNumber(4); // here magic number will return a value which we are storing in ans variable.
console.log(ans); // printing the ans
