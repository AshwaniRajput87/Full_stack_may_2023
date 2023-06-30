/**
 *   What is function ?
 *     - A reusable piece of code that performs some specific task.
 * 
 *   What do you mean by function as an object?
 * 
 *     - In Javascript, functions are objects that can be assigned in a variable, 
 *       can pass as an arguments to other function and can store functions 
 *       in a data structure(array, object).
 * 
 *     - They can properties and methods just like any other object.
 *       Example: computeAmount() -> Visit Lecture no JS-3/4
 *       This is the example of  computeAmount = (){}
 *       const computeAmount = () => {
 *           let amount = 0;
 *
 *           const value = () =>{
 *               return amount;
 *           }
 *
 *           const lacs =(num) => {
 *              amount = amount + num * 100000;
 *              return {lacs, value}
 *           }
 *
 *           return {lacs, value}
 *       }
 *       console.log(computeAmount().value()) //0
 *       console.log(computeAmount().lacs(2).value()) //2,00,000 
 *       console.log(computeAmount().lacs(2).lacs(20).value())//22,00,000 
 */

/**
 *  Types of functions in JS:
 *  
 *   1. named function: A function that has a name.
 *   2. Annonymouns function: A function that doesn't have any name.
 *   3. Function Expression: when you store an annonymous function in a variable.
 *   4. Arrow function: It's a compact syntax for writing the functions. (introduced in ES6)
 *   5. IIFE(Immediately Invoked function Expression): 
 *          When a function is immediately exceuted after it is defined is known as IIFE.
 *          need not to explicity called the function, it's executed automatically onload of script.
 *   6. Recursive function: Functions that call themselves util a base condition is met.
 *   7. callback: When a function is passed as an argument to another function and 
 *      invoked at later point in time
 *   8. Higher Order function: A function that accepts other functions as arguments or returns a function itself.
 *      - Map
 *      - Filter
 *      - reduce
 *      - forEach
 */


// 1. named function
function greetMsg() {
    console.log('Hello Ashwani');
}

greetMsg();

//2. Annonymouns function:
// function() { 
//     console.log('Hello Ashwani');
// }


//3. Function Expression
const greet = function() { 
    console.log('Hello Sunil');
}

greet();
