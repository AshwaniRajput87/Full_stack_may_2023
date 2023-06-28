/**
 *   What is function ?
 *     - A reusable piece of code that performs some specific task.
 * 
 *   What do you by function as an object?
 * 
 *     - In Javascript, functions are objects that can be assigned in a variable, 
 *       can pass as an arguments to other function and stores in data structure(array, object).
 * 
 *     - They can properties and methods just like any other object.
 *       Example: computeAmount() -> Visit Lecture no JS-3/4
 */

/***
 *  Types of functions in JS:
 *  
 *   1. named function: A function that has a name.
 *   2. Annonymouns function: A function that doesn't have any name.
 *   3. Function Expression: when you store the annonymous function in a variable.
 *   4. arrow function: A compct syntax for writing the functions. (introduced in ES6)
 *   5. IIFE(Immediately Invoked function Expression): When a function is immediately exceuted after it is defined.
 *                                                     need to explicity called the function, onload of script this would be executed.
 *   6. Recursive function: Functions that call themselves util a base condition is met.
 *   7. Higher Order function: A function that accepts other functions as arguments or returns a function itself.
 *      - Map
 *      - Filter
 *      - reduce
 *      - forEach
 *   8. callback: When a unction is passed aa an argument to another function and 
 *      invoked at later point in time
 */

// 1. named function

function greetMsg() {
    console.log('Hello Ashwani');
}

greetMsg();

// Annonymouns function:

// function() { 
//     console.log('Hello Ashwani');
// }

// Function Expression

const greet = function() { 
    console.log('Hello Sunil');
}

greet();
