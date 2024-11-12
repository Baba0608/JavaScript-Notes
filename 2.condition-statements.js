// Condition statements are used to execute some code based on condition.

// Syntax
/**
 * if (condition){
 *      some code
 * } else{
 *      some code
 * }
 */

// EX:-

let a = 10;

// if a is greater than 10 print "Hello" else print "Namaste"
if (a > 10) {
  console.log("Hello"); // console.log() is used to print.
} else {
  console.log("Namaste");
}

// 1) check if a given number is even or odd.
// if number divide by 2 and remainder is 0, then it is even, else odd.

let number = 22;
if (number % 2 === 0) {
  console.log(number, "is Even Number");
} else {
  console.log(number, "is Odd Number");
}

// Given age check if person is eligible to vote or not?
// if age is greater than or equal to 18, person is eligible to vote.

let age = 23;
if (age >= 18) {
  console.log("Person is eligible to vote");
} else {
  console.log("Person is not eligible to vote");
}

// Given marks of student print the grade based on the following logic
// marks >= 90  =>  Grade A
// 90 > marks >= 75  => Grade B
// 75 > marks >= 60  => Grade C
// 60 > marks >= 45  => Grade D
// less than 45  => Fail

let marks = 85;
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

// Switch case
// given month number print month.

let month_number = 8;

switch (month_number) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default: // Executes when no case statement is matching.
    console.log("Invalid");
}

// Given 3 sides of triangle find if it is Equilateral or Isoceles or Scalene triangle.
// if all sides are equal => Equilateral
// if any 2 sides are equal => Isoceles
// if all sides are different => Scalene

let s1 = 10;
let s2 = 15;
let s3 = 15;

if (s1 == s2 && s2 == s3 && s3 == s1) {
  console.log("Equilateral Triangle");
} else if (s1 !== s2 && s2 !== s3 && s3 !== s1) {
  console.log("Scalene Triangle");
} else {
  console.log("Isoceles Triangle");
}

// swap two numbers
/**
 * (i) using temporary variable
 *
 * let a = 10
 * let b = 20
 *
 *  -> let temp = a (values after this step => a = 10 , b = 20 , temp = 10)
 *  -> a = b (values after this step => a = 20 , b = 20 , temp = 10)
 *  -> b = temp (values after this step => a = 20 , b = 10 , temp = 10)
 *
 *  now the a is storing 20, b is storing 10. The values are swapped.
 *
 * (ii) without using temporary variable
 *
 * let a = 10
 * let b = 20
 *
 * a =  a + b (values after this step => a = 30 , b = 20)
 *     10 + 20
 *
 * b = a  - b (values after this step => a = 30 , b = 10)
 *     30 - 20
 *
 * a = a  - b (values after this step => a = 20 , b = 10)
 *     30 - 10
 *
 */
