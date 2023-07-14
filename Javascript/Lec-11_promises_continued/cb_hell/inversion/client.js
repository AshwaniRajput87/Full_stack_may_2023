const { promiseRunMLAlgo, runMlalgo } = require("./lib");
// console.log("Before");
// let amount = 100;
// let priceofOne = 20;

// /**
//  * takes the amount and callbacks as paramas
//  * and it calls the cb for us
//  * */

// const cb = () => {
//   amount = amount - priceofOne;
//   console.log("Amount: ", amount);
// };

// runMlalgo(amount, cb);

// console.log("After");

// output: Before After Amount: 80

console.log("Before");
let amount = 100;
let priceofOne = 20;

const cb = () => {
  amount = amount - priceofOne;
  console.log("Amount: ", amount);
};

const promise = promiseRunMLAlgo();
promise.then(cb);


console.log("After");

// output: Before running ml algo processing payment After Payment done Amount:80


/***
 *  Why promises are better than callback?
 *    - Promise can solve the callback hell problem.
 *    - Promise can either be resolved or rejected once in it's lifetime. (resolved the trust issue)
 *    - promised are priortized: callbacks of promises goes to separate queque known as microtask queue
 *      and it has highere priority than your normal callback queue.
 * 
 *  What is microtask queue?
 *    - a component of the javascript event loop.
 *    - responsible for handling microtasks, which are the tasks 
 *      that you have higher priority than the regular task(macrotasks) in the event loop.
 * 
 *    - example of microtasks that can include:
 *      1. Promise callbacks registered with then() -> resolve() and catch() -> reject()
 *      2. process.nextTick() callbacks in node.js
 *      3. Mutation observer callbacks for DOM changes.
 *   
 */




