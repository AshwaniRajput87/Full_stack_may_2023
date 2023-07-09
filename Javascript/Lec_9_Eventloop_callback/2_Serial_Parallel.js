/**
 *  Code:
 *    - synchronous code -> that is execute sequentially
 *    - asynchronous code -> that is executed parallely
 *simu
 *  Task:
 *    - serial task: task that dependent.
 *        Video - 4gb - cloud
 *            serial task -> Download -> compress -> upload on pepcoding's server
 *
 *    - parallel task: task that are independent
 */

// const fs = require("fs");

// console.log("Before");
// /***
//  * fs.readFileSync() -> Synchronous function in node js to read a file
//  */
// const data = fs.readFileSync("./f1.txt");
// console.log("" + data);

// console.log("After");

/**
 *  fs.readFile() - Asynchronous function in node js to read a file
 */

// const fs = require("fs");

// console.log("Before");

// fs.readFile("./f1.txt", (err, data) => {
//   console.log("" + data);
// });

// console.log("After");

/**
 * Synchronous code:
 *   1. you are blocking the main thread
 *   2. giving 2 files -> read them and
 *   3. give me the concatenated result in order the files have been supplied
 */

// const fs = require("fs");

// console.log("Before");

// const content1 = fs.readFileSync("./f1.txt");
// const content2 = fs.readFileSync("./f2.txt");

// console.log("" + content1 + " " + content2);

// console.log("After");

/**
 * Asynchronous code:
 *   1. you do not have to block the main thread
 *   2. giving 2 files -> read them and
 *   3. give me the concatenated result in order the files have been supplied
 *      asynchronous function -> callback -> it confirms that your function has been executed
 */

// const fs = require("fs");

// console.log("Before");

// fs.readFile("./f1.txt", (err, data) => {
//   const content1 = data;
//   fs.readFile("./f2.txt", (err, data) => {
//     const content2 = data;
//     console.log("" + content1 + " " + content2);
//   });
// });

// console.log("After");

/**
 *   Parallel task/execution of code
 *     1. you do not have to block the main thread
 *     2. giving 2 files -> read them and print them
 */

const fs = require("fs");

console.log("Before");

fs.readFile("./f1.txt", (err, data) => {
  console.log("" + data);
});

fs.readFile("./f2.txt", (err, data) => {
  console.log("" + data);
});

console.log("After");
