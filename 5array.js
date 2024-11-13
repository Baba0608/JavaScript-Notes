/**
 * An array is a data structure which is used to store data in contagious memory location.
 *
 * Means the elements in the array are stored sequentially in the memory space.
 *
 * how to create array?
 *
 * wrap the elements inside square brackets by seperating with a comma.
 */

let arr = [10, 20, 30, 40, 50]; // this how we create an array.

// (i) indexing in the array.
/**
 * index is just position of an element in an array.
 * In an array indexing starts from 0.
 * That means =>
 * element 10 is at index 0
 * element 20 is at index 1
 * element 30 is at index 2
 * element 40 is at index 3
 * element 50 is at index 4
 *
 *   0    1    2    3    4
 * [10 , 20 , 30 , 40 , 50]
 */

// (ii) How to access elements in an array
// If we want to get element 40 which is at index 3, we can do
let a = arr[3]; // 40 is stored in variable "a"

// (iii) lenght of an array.
// lenght of an array means how many elements are present in the array. We can find lenght of an array using the keyword 'length'.
let lenghtOfArray = arr.length;

// (iv) how to add elements to array. We use push keyword to add elements at the last into array.
arr.push(60); // 60 will be added at the end.
console.log(arr); // [10, 20, 30, 40, 50, 60]

// (v) how to remove element from an array. We use pop keyword to remove element from the last.
arr.pop();
console.log(arr);

// (vi) iterating an array.
//   0   1   2   3   4
// [10, 20, 30, 40, 50]
/**
 * iterating an array means looping an array from index zero to n - 1, where n is the length of an array.
 *
 * in the above example n = 5(lenght of an array). which means we will loop from 0 to 4.
 *
 * first index = 0
 * last index = 4 => length - 1
 * we know the range so, we can use for loop to iterate.
 */

for (let i = 0; i <= arr.length - 1; i++) {
  console.log("Element at index", i, "is", arr[i]);
}
