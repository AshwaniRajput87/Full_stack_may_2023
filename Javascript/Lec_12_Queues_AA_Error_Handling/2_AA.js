/**
 *  async/await: 
 *     - introduced in ES8(2017).
 *     - syntactic sugar of consuming the promises.
 *     - provide a more concise and readable way to write asynchronous code in JavaScript.
 */

const fs = require('fs');

console.log('Before');

const promise = fs.promises.readFile('./f1.txt');

// then is an event Listener over promise -> it triggers it's function when promise is getting resolved/ compeleted
// catch is also an event listener over promise -> it triggers its fn when  promise is rejected (you get an error)

/****  Consumption of promise */

// const fn = async() => {
//     try {
//       const data = await promise;
//       console.log('Content of the file is:' + data);
//     } catch (err) {
//        console.log(err) 
//     } 
// }
// fn();


// promise
// .then((futureValue)=>{ // This handles your resolved by promises 
//    console.log("Data inside in the file: " + futureValue);
// })
// .catch((err)=> { // This handles your rejected by promises
//   console.log(err);
// });

/***
 *  Learning: async keyword fn always return a pending promise 
 *   so either you can use async/await again for that function or can use then()/catch()
 */

const fn = async() => {
    try {
        let data1 = await promise;
        console.log('Content of f1 file: ' + data1);

        let data2 = await fs.promises.readFile('./f2.txt');
        console.log('Content inside file f2:' + data2);

        let data3 = await fs.promises.readFile('./f3.txt');
        console.log('Content of f3 file' + data3);
        return 'rVal from fn';
    } catch (err) {
        console.log(err);
   }
}

const processedData = async() => {
    let rVal = await fn();
    console.log(rVal);
}

processedData();

console.log('After');

// { let take break of 10 mins} - 10:15PM

