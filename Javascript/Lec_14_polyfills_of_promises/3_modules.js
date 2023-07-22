/**
 *   What is module in JS? ->  communication among different JS files with the help of methods, classes. variables
 *     - a way to make your code modular, maintainable and scalable -> if you are able to use 
 *       a piece of code in other JS files.
 * 
 *     - A module organizes and encapsulates the code by breaking down it into smaller resuable pieces of code.
 * 
 *     - ES6 -> export and import keywords -> that controls what parts of code in a module accessible to other part of modules.
 */

import { add, PI } from './utilites/mathUtil.js';

// console.log(add(10, 20));

// console.log(PI);

import Calculator1 from './utilites/Calculator.js';

const calc = new Calculator1();

console.log(calc.add(10, 20))

console.log(calc.subtract(20, 10));

/**
 *  export: 
 *     - used to export named entities (function, variables, classes) from a module
 *     - when importing, you need to use curly braces {}
 *     - you can multiple named exports in a module.
 * 
 *  export default:
 *     - can be only one default export per module.
 *     - when importing, you cannot use curly braces.
 */


//{lets take a break of 5 mins} - 10:26PM

