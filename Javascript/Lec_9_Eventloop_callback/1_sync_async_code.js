/**
 * synchronous code: the code that will execute
 *     sequentially or line by line
 *
 */

// console.log("Before");

// const fn = () => {
//   for (let i = 0; i < 10000000000; i++);
//   console.log("I am fn");
// };
// fn();
// console.log("After");

/***
 * output:
 *  Before
 *  I am fn
 *  After
 */

/**
 *  asynchronous code:
 *       a non-blocking code, that allows multiple tasks
 *       to run simultaneously without waiting for
 *       each task to finish before moving on to the next one.
 */

console.log("Before");

const fn = () => {
  //   for (let i = 0; i < 10000000000; i++);
  console.log("I am fn");
};

setTimeout(fn, 2000); // This is an asynchronous function

console.log("After");

/***
 * output:
 *  Before
 *  After
 *  I am fn
 */

/***
 *  Environment: Browser
 *     Web API/ Browser API:  provides the features (setTimout, fetch, DOM, eventListeners etc)
 *                            for doing things concurrently in the browser.
 *     console -> is not part of JS
 *     window -> is not part of JS
 *     document -> is not part of JS
 *     fetch -> no
 *     eventListerners -> no
 *     setTimeout -> no
 *
 *  Environment: nodeJS
 *    fs: nodeJS
 *    HTTP: nodeJS
 *    child_process: nodeJS
 *    I/O: nodeJS
 *
 * Thumbrule:
 *   Environment: provides a set of features
 *
 *   JS: provides the logic
 *            That's why you never intall JS
 *
 *   Programmer:
 *      C++ -> Java -> pointer were taken care of/ memmory management
 *      Java -> JS -> there are no threads to take care of
 *
 *   Inference -> you cannot create
 *        an asynchronous functions as a programmer -> Environment -> Browser
 *
 */

// let a = true;

// console.log("Before");

// setTimeout(() => {
//   a = false;
//   console.log("I broke the while loop");
// }, 1000);

// console.log("After");

// // while (a) {}

// let timeInFuture = Date.now() + 5000;

// while (Date.now() < timeInFuture) {}

// console.log("Before");

// const cb2 = () => {
//   console.log("set timeout 1");
//   //   while (1) {}

//   let timeInfuture = Date.now() + 5000;
//   while (Date.now() < timeInfuture) {}
// };

// const cb1 = () => console.log("hello");
// setTimeout(cb2, 3000);

// setTimeout(cb1, 1000);

// console.log("After");

// {break of 10 mins}
