// Loops are used to do a task repeatedly

/**
 * 1) For Loop (if you know the range)
 * EX:- If you want to add numbers from a to b. Here you know range. So, we can use for loop.
 *
 * 2) While Loop
 *  - i) Can be used if you know the range.
 *  - ii) To Repeat a task until a condition is true.
 *  Ex:- To find first first n prime numbers. Here you dont know the range. We only know the condition. That is "first n prime numbers".
 */

// print "Java Script" for 10 times
for (let i = 0; i < 10; i++) {
  console.log("Java Script");
}

// print "Java Script" for 10 times using while loop

let i = 0; // initialization
while (i < 10) {
  // i < 10 is the condition
  console.log("Java Script");
  i++; // increment
}

// 1) find the sum of first n numbers.

let n = 10; // sum of first 10 numbers
let sum = 0; // to store the sum of numbers
for (let i = 1; i <= n; i++) {
  sum += i; // each number is added here
}

console.log(sum);

// 2) factorial of a number
// 5! = 5 * 4 * 3 * 2 * 1   ==>  1 * 2 * 3 * 4 * 5
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i; // multipling each number
}

console.log(factorial);

// 3) find the sum all numbers between two numbers a and b (including and b), where a < b.
// Ex:-
// Input: a = 10, b = 45
// output: 990

// 4) find the sum of even  numbers between a and b (including a and b), where a < b
// Ex:-
// Input: a = 10, b = 45
// Output: 486

// 5) find the sum of even  numbers between a and b (including a and b), where a < b
// Ex:-
// Input: a = 10, b = 45
// Output: 504

// 6) find if given number is prime or not?
// A number is a prime number if it is divisile by only 1 and itself.
// Approach: If prime number is divisible by only 1 and itself, then we loop from 1 to the given number and divide the given number with each number from 1 to n (say n is given number) and count how many times the given is divisible. In the end if count is 2 then the given number is prime.  (This the very Naive approach) We will optimize the prime number logic later.

let num = 23;
let count = 0;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}

if (count == 2) {
  console.log(num, "is prime number");
} else {
  console.log(num, "is not a prime number");
}

// Practice all these with while loop.

// 7) print first 10 prime numbers.
// Here we dont know the range, but we know the condition 10 primes numbers. So, we will use while loop here.

let x = 0; // to count prime numbers
let k = 2; // we will start from 2
while (x < 10) {
  // logic for prime number
  let count = 0;
  for (let i = 1; i <= k; i++) {
    if (k % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(k, "is prime number");
    x++; // increment x if we found prime number.
  }

  k++; // increment number => 2 , 3 , 4 , 5......
}

// Here the while will run until the condition x < 10 is true.
