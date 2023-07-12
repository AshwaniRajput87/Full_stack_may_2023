/***
 *  async JS code
 *     - callback -> callback hell problem
 *     - promises
 *     - async/await
 *
 *  What is callback hell problem?
 *     - refers a situation in async programming where multiple
 *       nested callbacks -> it makes the code difficult to read, understand and maintain.
 */

const fs = require("fs");

console.log("Before");

fs.readFile("./f1.txt", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Content:" + data);
    fs.readFile("./f2.txt", (err, data) => {
      if (err) {
        console.log("Error:", err);
      } else {
        console.log("Content:" + data);
        fs.readFile("./f3.txt", (err, data) => {
          if (err) {
            console.log("Error:", err);
          } else {
            console.log("Content:" + data);
          }
        });
      }
    });
  }
});

console.log("After");
