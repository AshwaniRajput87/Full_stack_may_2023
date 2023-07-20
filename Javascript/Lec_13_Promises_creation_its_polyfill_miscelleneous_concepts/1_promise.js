/***
 *    What were issues in the callbacks?
 *       1. nested callbacks -> callback hell problem.
 *       2. Inversion of control(Trust issue)
 *          // cb based on async fn -> cb to third party library functions ->
 *            async fn calls your cb multiple times.
 *    
 *     Promises were introduced to solve above problems:
 *       Inversion of control: 
 *          here we send the cb to the promise API -> where the 
 *                  promise can be resloved or rejected once in a lifetime
 */

const fs = require('fs');

// then -> multiple then you can attach over a promise.
//let promise = fs.promises.readFile('f1.txt'); // every promise can be resolved or rejected.
// console.log(promise);

/* then -> then is an event listener (handler) for a promise 
 *         when promise state changes to resolve
 */

// promise.then((data) => {
//     console.log('Data inside file is: ' + data);
// });

// promise.then((data) => {
//     console.log('Data inside file is: ', data);
// });

// promise.then(() => {
//     console.log('I am not accepting any params');
// });

// catch -> can attach multiple catches ove a promise

// catch -> ia an event listener (handler) for a promise When promise state chnages to reject
// promise.catch((error) => {
//     console.log('Inside catch 1', error.message);
// });

// promise.catch((err) => {
//     console.log('Inside catch 2', err.message);
// });

// promise.catch((err) => {
//     console.log('Inside catch 3', 'No error message');
// });

// // finally -> can attach multiple finally to a promise
// // finally is an event listener (handler) for a promise regardless of whether promise is getting resolved or rejected

// promise.finally((data) => {
//     console.log('Inside first finally ' + data);
//     // loader.hide();
//     // closing the database connection
// });

// promise.finally(() => {
//     console.log('Inside second finally');
// });

/**
 *  promise is an object: 
 *   1. value: 1.1 undefined or 1.2 the value you have passed/read with respect to state changes or value to be present here
 *   2. state: pending and fullfilled (resolved and rejected)
 */

/***
 *  then takes 2 parameters -> both the params are cb fns
 *  
 *  first parameter -> scb/null -> is compulsory and that is invoked when the promise is getting resolved
 *  second parameter -> fcb -> if present called when the promise is rejected 
 * 
 */

// const scb = (data) => {
//     console.log('Content inside the file: ' + data);
// }

// const fcb = (err) => {
//     console.log('Error inside catch', err.message);
// }

// promise.then(null, fcb);

//promise.then(null, fcb); // promise.catch(fcb) -> promise.then(null, fcb)

/**
 * Promise:
 *   resolve(): promise with state resolved whatever you pass into it, you get that value
 *   reject(): promise with state rejected whatever you pass into it, you get as a value
 */

// const promise = Promise.reject(20);

// promise.then((value) => {
//     console.log('Value is: ', value); // Value is: 20
// });

// promise.catch((value) => {
//     console.log('Value is: ', value); // Value is: 20
// });

// const promise1 = Promise.reject("Some error");

// promise1.then((err) => {
//   console.log("90", err); // 90 Some error / won't be executed
// }).catch((err) => {
//   console.log("92", err); // 92 Some error
// }); 

// const promise1 = Promise.resolve(100);

// promise1.then((err) => {
//   console.log("90", err); // 90 100
// }).catch((err) => {
//   console.log("92", err); // won't be executed
// }); 

// const fs = require('fs');
// const promise = Promise.resolve(10);

// promise.then((data) => {
//     console.log("92", data); // 92 10
// }).then((firstThenVal) =>{
//     console.log("113", firstThenVal); // 113 undefined
//     return 100;
// }).then((secondThenVal) => {
//     console.log("116", secondThenVal); // 116 100
//     return fs.promises.readFile("./f1.txt")
// }).then((thirdThen) => {
//     console.log("120 " + thirdThen); // 120 I am f1 file
// });

// const promise1 = Promise.reject("Some error");

// promise1.then(null, (err) => { // similar to promise1.catch(fcb)
//   console.log("90", err); // 90 Some error
//   return 10;
// }).then((err) => {
//     console.log("92", err);// 92 10
// });

// const fs = require("fs");
// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
//     resolve("some error");
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
// });

// p.then(null, function (err) { // will this invoke -> no
//     console.log(1);
//     console.log(err);
// });

// p.catch(function (err) { // will this invoke -> no
//     console.log(2);
//     console.log(err);
// });

// p.finally(function () {
//   console.log("32", 1); // 32 1
// });

// const fs = require("fs");
// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
//     resolve("some error");
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
// });

// p.then(null, function (err) { // won't invoke
//     console.log(1);
//     console.log(err);
// });

// p.catch(function (err) {
//     console.log(2);
//     console.log(err);// won't invoke
// });

// p.finally(function () { // will invoke 
//   console.log("32", 1);  // 32 1
// });

// p.then( // will this invoke -> 
//     function (val) {
//         console.log("44", val); // 44 some error
//     },
//     function (err) {
//         console.log(err);
//     }
// );

 /*
  * finally does not take any argumenst -> forwards the argument recieved
  */
// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
//     resolve("some error");
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
// });

// p.finally(function () {
//   console.log("37", 2); // 37 2
//   // throw new Error("Hello");
//   return Promise.reject("Some Error1");
// }).finally(function () {
//   console.log("37", 2);   // 37 2
//   return fs.promises.readFile("f1.txt");
// }).then(function (val) {
//   console.log("39", val);  // 39 some error
// }).catch(function (err) {
//   console.log("52", err);
// });

// { lets take a break of 10 mins} - 8:35AM
// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error2");

//     setTimeout(function () {
//         reject(new Error("some value2"));
//     }, 2000);
// });

// p.then(null, function (err) { // will this invove -> no
//     console.log(1,'24');
//     console.log(err,'25');
// });

// p.catch(function (err) {  // will this invove -> no
//     console.log(2,'29');
//     console.log(err,'30');
// });

// p.finally(function () { // yes will invoke
//     console.log(1,'34'); // 1 34
// })

// p.then(function (val) { // will invoke 
//     console.log(val,'40'); // some error 40
   
// }).finally(function () {
//      console.log(2,'38'); // 2 38
// })

// p.then(
//     function (val) {
//         console.log(val,'45');  // some error 45
//     },
//     function (err) {
//         console.log(err,'48');
//     }
// ).finally(function(){console.log('50')}); // 50
/**
 *  output:
 *   1 34
 *   some error 40
 *   some error 45
 *   2 38
 *   50
 */

// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error2");

//     setTimeout(function () {
//         reject(new Error("some value2"));
//     }, 2000);
// });

// p.then(null, function (err) { // will this invove -> no
//     console.log(1,'24');
//     console.log(err,'25');
// }).catch(function (err) {  // will this invove -> no
//     console.log(2,'29');
//     console.log(err,'30');
// }).finally(function () { // yes will invoke
//     console.log(1,'34'); // 1 34
// })

// p.then(function (val) { // will invoke 
//     console.log(val,'40'); // some error 40
   
// }).finally(function () {
//      console.log(2,'38'); // 2 38
// })

// p.then(
//     function (val) {
//         console.log(val,'45');  // some error 45
//     },
//     function (err) {
//         console.log(err,'48');
//     }
// ).finally(function () { console.log('50') }); // 50

/**
 * output
 * 
 *  Some error 40
 *  Some erro 45
 *  2 38
 *  50
 *  1 34
 */

// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error2");

//     setTimeout(function () {
//         reject(new Error("some value2"));
//     }, 2000);
// });

// p.then(null, function (err) { // will this invove -> no
//     console.log(1,'24');
//     console.log(err,'25');
// });

// p.catch(function (err) {  // will this invove -> no
//     console.log(2,'29');
//     console.log(err,'30');
// });

// p.finally(function () { // yes will invoke
//     console.log(1,'34'); // 1 34
// })

// p.finally(function () { // will invoke 
//      console.log(2,'38'); // some error 40
   
// }).then(function (val) {
//     console.log(val,'40'); // 2 38
// })

// p.then(
//     function (val) {
//         console.log(val,'45');  // some error 45
//     },
//     function (err) {
//         console.log(err,'48');
//     }
// ).finally(function(){console.log('50')}); // 50
/**
 * 
 * 1 34
   2 38
   some error 45
   50
   some error 40
 */

   let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error("some value"));
    }, 2000);

    resolve("some error");

    setTimeout(function () {
        reject(new Error("some value"));
    }, 2000);

    resolve("some error2");

    setTimeout(function () {
        reject(new Error("some value2"));
    }, 2000);
});

p.then(null, function (err) { // will this invove -> no
    console.log(1,'24');
    console.log(err,'25');
});

p.catch(function (err) {  // will this invove -> no
    console.log(2,'29');
    console.log(err,'30');
});

p.finally(function () { // yes will invoke
    console.log(1,'34'); // 1 34
})

p.then(function (val) {
    console.log(val,'40'); // some error 40
}).finally(function () { // will invoke 
    console.log(2,'38'); // 2 38

})

p.then(
    function (val) {
        console.log(val,'45');  // some error 45
    },
    function (err) {
        console.log(err,'48');
    }
).finally(function () { console.log('50') }); // 50

/***
 *  output
 *  1 34 
 *  some erro 40
 *  some erro 45
 *  2 38
 *  50
 */


