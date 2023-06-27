/**
 *  What is default parameter?
 *    - It's a feature in ES6 that allows you to assign a 
 *      default values to the function parameter.
 *  
 *  What is rest operator?
 *   - It's feature introduced in ES6, that allows a function to accept any number of 
 *     params as an array, 
 *     even if the number of arguments/params are not known in advance.
 * 
 *   - denoted by ellipsis(...) followed by by parameter name.
 *   - eg: const value = (a, b, ...restValues) => {
 *            a = b = 5;
 *         } 
 * 
 *         value(2,3,4,5,7,8); // a=b= 5;  ...restValues = [4,5,7,8]
 * 
 *   What is spread operator?
 *    - ES6 feature, that allows an iterable(like an array) to be expanded 
 *      into individual elements.
 *    - (...)followed by iterable expressions(an array or an array of objects)
 *   
 *   Call by value and call by reference in JS?
 *     - During your function call is your value get modified or not?
 */

// Calculate the area of a rectangle.

const area = (l, b = 0) => {
    return l * b; //5 * undefined = NaN
}

console.log(area(5));
console.log(area(5, 10));


// Find max number among (10, 50,20, 80) => 80

const findMax = (...numbers) => { // numbers = [10, 50, 20, 80, 90]
    return Math.max(...numbers); // numbers = 10, 50, 20, 80, 90
}

console.log(findMax(10, 50, 20, 80, 90)); // 90

const arr = [1,2,3];
console.log(arr);

const arr1 = [...arr];
 

