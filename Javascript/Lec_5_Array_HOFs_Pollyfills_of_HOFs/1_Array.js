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
 *  Most used methods of array: 
 *  1. push(): Adds one or more elements to the end of an array.
 *  2. pop(): Removes the last element from an array and returns it.
 *  3. unshift(): Adds one or more elements to the beginning of an array.
 *  4. shift(): Removes the first element from an array and returns it.
 *  5. isArray(): Checks if a value is an array or not and returns a boolean value(true/false).
 *  6. reverse(): Reverses the order of the elements in an array.
 *  7. sort(): Sorts the elements of an array in place. 
 *  8. tostring():Converts an array to a string.
 *  9. concat(): merging 2 or more arrays and returns a new array.
 *  10. indexOf(): Returns the first index at which 
 *      a specified element is found in an array.
 *  11. lastIndexOf(): Returns the last index 
 *      at which a specified element is found in an array.
 *  12. includes(): Checks if an array contains a specified element and 
 *      returns a boolean value.
 *  13. join(): Joins all elements of an array into a string.
 *  14. slice(): Extract the protion of an array into a new array, 
 *      without modificying the original array.
 *      syntax: slice(start, end) end(exclusive)
 *      NOTE: It supports negative index also.
 *      
 *  15. splice(): Changes the contents of an array by removing, 
 *      replacing, or adding elements, but it modifies the original array. 
 *      syntax: array.splice(start, deleteCount, item1, item2, ..., itemN);
 *      NOTE: It doesn't support negative index.
 * IQ: slice() vs splice()
 */ 
        //      0        1        2
let fruits = ['apple', 'banana', 'orange'];
        //      -3            -2       -1
let newFruitsBucket = fruits.slice();
newFruitsBucket.push('kiwi')

console.log(newFruitsBucket);

console.log(fruits.slice());
//console.log(fruits.slice(1,2)); // [banana]

console.log(fruits.slice(0,1)); //

console.log(fruits.slice(-2, -1)); // ['banana']
console.log(fruits.slice(-3, -1)); //['apple', 'banana']


