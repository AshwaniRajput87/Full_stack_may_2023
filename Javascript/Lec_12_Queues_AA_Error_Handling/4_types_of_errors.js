/**
 * Inbuilt-types of errors in JS:
 * 
 *    1. Syntax error: means syntax violation in the code
 *    2. Runtime error: only get to know the error after executing the code 
 *       and it will fail the point where you have made the error/mistake
 *    3. Type Error: occurs when an operation is performed on a value of an unexpected type
 *    4. Reference Error: Occurs when an invalid reference is made 
 *                        to an undeclared or inaccessible variable, function, or object.
 *    5. Range Error: occurs when a numeric value is out of allowable value.
 *    6. URI error: Will take during encoding and decoding of the URI in Manchine coding.
 *                  But it occurs when encoding or decoding functions  encounter invalid URIs
 */


/**
 * syntax error: means syntax violation in the code
 */

console.log('Hi');
// le a; // SyntaxError: Unexpected identifier 'a'
// let a;

/**
 * 
 *  Type error: occurs when an operation is performed on a value of an unexpected type
 */

// let num = 10;

// console.log(num.toUpperCase()); // TypeError: num.toUpperCase is not a function


// const fn = () => {
//     let str = 'hello';
//     console.log(str.abc); // undefined
//     console.log(str.abc.def);// TypeError: Cannot read properties of undefined (reading 'def')
// }

// fn();

/***
 * Reference Error: Occurs when an invalid reference is made 
 *                  to an undeclared or inaccessible variable, function, or object.
 */

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a; 

// fn(); // ReferenceError: fn is not defined

/**
 *  Range Error: occurs when a numeric value is out of allowable value.
 */

// infinite recursion
// const fn = () => { // RangeError: Maximum call stack size exceeded
//     fn();
// }

// fn();

// let a = [];

// a.length = 100 ** 100;

// console(a.length); //RangeError: Invalid array length

// console.log('Before')
// try {
//     console.log(a);
//     let a;
// } catch (err) {
//     console.log(err);
// }
// console.log('after')

/*** try catch block is working as synchronous code */
// try {
//     setTimeout(() => {
//         console.log('settime out executed');
//         console.log(a);
//     }, 1000);
// } catch (err) {
//     console.log('Message:', err.message);
//     console.log('name of the error', err.name);
// }

console.log('Before');
setTimeout(() => { 
    try {
      console.log('settime out executed');
      console.log(a);
    } catch (err) {
      console.log('Message:', err.message);
      console.log('name of the error', err.name);  
  }
}, 1000);

console.log('After');

// output: before after settime out executed Reference error: a is not defined




