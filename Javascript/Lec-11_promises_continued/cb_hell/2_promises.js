/**
 *   Promises:
 *      - is a part of JS
 *      - new Promise(resolve, reject);
 *   Promise based function -> do take the cbs(callbacks)
 */

const fs = require('fs');

// console.log('Before');

// const promise = fs.promises.readFile('./f1.txt');

// console.log(promise);

// console.log('After');


// console.log('Before');

// const promise = fs.promises.readFile('./f1.txt');

// //console.log(promise);

// setTimeout(() => {
//    console.log('I am reading the file');

//    console.log(promise);
// }, 1000);

// console.log('After');

/**
 *   1. Promised based fn -> takes the input only ->  they don takes cbs(callbacks).
 *   2. Returns the promises that will contain a value and a state of that promise -> promise based function
 * 
 */

console.log('Before');

const promise = fs.promises.readFile('./f1.txt');

// then is an event Listener over promise -> it triggers it's function when promise is getting resolved/ compeleted
// catch is also an event listener over promise -> it triggers its fn when  promise is rejected (you get an error)
promise
.then((futureValue)=>{ // This handles your resolved by promises 
   console.log("Data inside in the file: " + futureValue);
})
.catch((err)=> { // This handles your rejected by promises
  console.log(err);
});

console.log('After');




