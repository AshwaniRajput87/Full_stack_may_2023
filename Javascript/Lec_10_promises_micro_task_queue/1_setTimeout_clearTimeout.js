/**
 * setTimeout():
 *     - it's a in-built function provided by the browser, not a part of JS.
 *     - sets a timer which executes a function after a specified delay.
 *       (It will executed the function only once)
 *     - syntax:
 *          - setTimeout(function, delay(in milliseconds), param1, parma2,...)
 *          - returns a timeoutId which is positive ineteger value
 *
 *   clearTimeout():
 *     - it's a in-built function provided by the browser, not a part of JS.
 *     - stops the execution of the function specified in setTimeout() call.
 *     - syntax:
 *         - clearTimeout(timeoutID)
 */

// console.log("Before");

// const cb = () => {
//   console.log("Settimeout cb has been called");
// };

// const timerId = setTimeout(cb, 2000);

// console.log(timerId);

// console.log("After");/

/***
 * usage of clearTimeout(timerId)
 *
 */
// console.log("Before");

// const cb = () => {
//   console.log("Settimeout cb has been called");
// };

// const timerId = setTimeout(cb, 2000);

// const canceller = () => {
//   console.log("Cancelling the timeout");
//   clearTimeout(timerId);
// };

// // setTimeout(canceller, 1000); // Before After cancelling the timeout

// setTimeout(canceller, 3000); // // Before After settimeout cb has been called cancelling the timeout

// console.log("After");

/***
 * setTimeout() with params
 */

const greetMsg = (name, age) => {
  console.log(`Hello, ${name} and your age is ${age}`);
};

const timerID = setTimeout(greetMsg, 0, "Rohant", 34);
console.log(timerID);
