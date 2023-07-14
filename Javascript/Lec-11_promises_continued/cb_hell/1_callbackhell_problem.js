/***
 *  async JS code
 *     - callback -> callback hell problem
 *     - promises
 *     - async/await
 *
 *  What is callback hell problem?
 *   1. Nesting callbackls:
 *     - refers a situation in async programming where multiple
 *       nested callbacks -> it makes the code difficult to read, understand and maintain.
 * 
 *     - It occurs when callbacks are heavily nested with one another 
 *       resulting in a pyramid-like structure that becomes a challenging task to manage it well.
 *   2. Inversion of control:  we send our callback function to an async code function and 
 *      that async function has the control to call it.(Trust issues)
 */

const fs = require("fs");

console.log("Before");


const f1cb = (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Content:" + data); 
  }
}

fs.readFile("./f1.txt", f1cb);


const f2cb = (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Content:" + data);
  }
}
fs.readFile("./f2.txt", f2cb);


const f3cb = (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Content:" + data);
  }
}
fs.readFile("./f3.txt", f3cb);

console.log("After");
