/**
 * What is array in JS?
 *  - An in-built object to store multiple values in a single variable.
 *  - Array(0): it creates an empty array with length of 0, that means it doesn't contain any element.
 *  - here in Array(0), 0 represents the length
 */


let arr = [1,2,3,4,5];

//arr.push('Data');

console.log(arr);

let sum = 0;
for(let i=0; i<arr.length; i++) {
   sum+=arr[i];
}
console.log(sum);

Array.prototype.sum = function() {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
       sum+=arr[i];
    }
    console.log("Custom Array Method:",sum); 
}

arr.sum();

// constructor: returns the function that created the array object;

let arr1 = [1,2];
console.log(arr1.constructor);// Array()

/**
 *  Most used method of array: 
 *  1. push()
 *  2. pop()
 *  3. unshift()
 *  4. shift()
 *  5. isArray()
 *  6. reverse();
 *  7. sort()
 *  8. tostring()
 *  9. concat(): merging 2 or more array.
 *  10. indexOf()
 *  11. lastIndexOf()
 *  12. includes()
 *  13. slice(): Extract the protion of an array into a new array, 
 *      without modification the original array
 *      syntax: slice(start, end) end(exclusive)
 *  14. splice(): 
 * 
 * IQ: slice() vs splice()
 */ 
        //      0        1        2
let fruits = ['apple', 'banana', 'orange'];
               -3            -2       -1
let newFruitsBucket = fruits.slice();
newFruitsBucket.push('kiwi')

console.log(newFruitsBucket);

console.log(fruits.slice());
//console.log(fruits.slice(1,2)); // [banana]

console.log(fruits.slice(0,1)); //

console.log(fruits.slice(-2, -1)); // ['banana']
console.log(fruits.slice(-3, -1)); //['apple', 'banana']


