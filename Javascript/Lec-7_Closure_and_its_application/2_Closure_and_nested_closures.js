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
 *   2. local function & its var
 *   3. globalThis, window obj,
 *   4. Lexical scope
 *   5. Closure -> till GEC
 */

/**
 * Closure vs block scope
 */

// function outer() {
//   let arrFn = [];
//   for (var i = 0; i < 3; i++) {
//     arrFn.push(function fn() {
//       // storing the functions into an array arrFn
//       i++; // 0 1 2
//       console.log(i); // 1 2 3
//     });
//   }
//   return arrFn;
// }
// let arrFn = outer();
// arrFn[0](); // invoking the first function in the array of arrFn  4
// arrFn[1](); // invoking the second function in the array of arrFn 5
// arrFn[2](); // // invoking the third  function in the array of arrFn 6

function outer() {
  let arrFn = [];
  for (let i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      /* fn is getting different values of i because 
        here block scope is different in each iteration*/ // storing the functions into an array arrFn
      // arrFn has block scope refers to -> functions
      i++;
      console.log(i); //i=1, 2, 3
    });
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0](); // invoking the first function in the array of arrFn
arrFn[1](); // invoking the second function in the array of arrFn
arrFn[2](); // // invoking the third  function in the array of arrFn
