/**
 * Closure:
 *    -> When a function is hoisted at that point of time, 
 *     it forms closure over outer variables.
 *   
 * Formal definition of Closure: 
 *    -> inner function forms closure over outer function's variable 
 *     and it's variables are persent even if outer function is removed from the call stack.

 *    -> When does closure form? -> when a inner fn is hoisted, it forms closure over outer variable.
 */

// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }
//   return innerFunction;
// }
// const innerFunc = outerFunction();
// console.log(innerFunc());
// console.log(innerFunc());

function createCounter(init, delta) {
  function count() {
    init = init + delta;
    return init;
  }
  return count;
}
let c1 = createCounter(10, 5); //  c1 -> (init =10, delta = 5)
let c2 = createCounter(5, 2); // c2 -> (init =5, delta = 2)

console.log(c1()); // c1 -> ( init = 15, delta=5)
console.log(c2()); // c2 -> (init = 7 , delta = 2 )
console.log(c1()); // c1 -> (init = 20, delta = 5)
console.log(c2()); // c2 -> (init = 9, delta = 2 )

/***
 * Nested closure -> you will get access to outer variable
 * even if the outer function is not the direct parent.
 */

let iamGEC = 200;
function getFirstName(firstName) {
  console.log("I have got my first name");
  return function getLastName(lastName) {
    console.log("I have got the last name");
    return function greetMsg() {
      console.log(` Hi, ${firstName} ${lastName}`); // closure
      console.log("hi I am GEC value: ", iamGEC); // Lexical scope
    };
  };
}

const firstNameRtn = getFirstName("Ambati");

const lsNameRtn = firstNameRtn("Kumar");

lsNameRtn();

/**
 * Summary:
 *
 *  Every code is executed in EC:
 *   1. this
 *   2. local function & its variables
 *   3. globalThis, window obj,
 *   4. Lexical scope
 *   5. Closure -> till GEC
 */

/**
 * Closure vs block scope
 */
//Example-1
// function outer() {
//   let arrFn = [];
//   for (var i = 0; i < 3; i++) { i has become 3 come out of the loop
//     arrFn.push(function fn() {
//       // storing the functions into an array arrFn
//       i++;
//       console.log(i);
//   }
//   return arrFn;
// }
// let arrFn = outer();
// arrFn[0](); // invoking the first function in the array of arrFn  i=3+1 = 4
// arrFn[1](); // invoking the second function in the array of arrFn i=4+1 = 5
// arrFn[2](); // // invoking the third  function in the array of arrFn i=5+1 = 6

//Example-2
function outer() {
  // arrFn has block scope refers to -> function outer
  let arrFn = [];
  for (let i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      // storing the functions into an array arrFn

      /* fn is getting different values of i because 
        here block scope is different in each iteration*/
      i++;
      console.log(i);
    });
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0](); // invoking the first function in the array of arrFn -> 1
arrFn[1](); // invoking the second function in the array of arrFn -> 2
arrFn[2](); // // invoking the third  function in the array of arrFn -> 3

// irrespective of order of function stored in stack the value i would be:
//arrFn[2]() -> 1
//arrFn[1]() -> 2
//arrFn[0]() -> 3
