/***
 * Promise methods:
 *   resolve, reject, then , catch, finally, all, allSettled, race, any.
 */

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

// constructor function 
function CustomPromise(executorFn) {
    //1. add required method and properties
    let state = PENDING;
    let value = undefined;
    let scbArr = [];
    let fcbArr = [];

    //2. attach methods like resolve, reject, then, catch
    const resolve = (val) => {
        if (state !== PENDING) return; // if the state is not in pending, return from here
        state = RESOLVED;
        value = val;
        // scb
        scbArr.forEach((cb) => {
            cb(value);
        })
    }

    const reject = (err) => {
        if (state !== PENDING) return; // if the state is not in pending, return from here
        state = REJECTED;
        value = err;
        // fcb
        fcbArr.forEach((cb) => {
            cb(value);
        })
    }

    this.then = function (cb) {
        if (state === RESOLVED) {
            cb(value);
        } else {
            scbArr.push(cb);
        }
    }

    this.catch = function (cb) {
        if (state === REJECTED) {
            cb(value);
        } else {
            fcbArr.push(cb);
        }
    }

    // For finally do yourself as HW.


    //3. call the executor function
    executorFn(resolve, reject);
}

const myPromise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        const data = { name: 'Ashwani Rajput' };
        //const data = null;
        if (data) {
            resolve(data);
        } else {
            reject(new Error('Promise Rejected'))
        }
    }, 1000);
});

// consumption of your promise
myPromise.then((data) => {
    console.log(data);
});

// myPromise.catch((error) => {
//     console.log(error);
// });

promise1 = new CustomPromise((resolve, reject) => {
    resolve(82);
});

promise1.then((data) => {
    console.log(data);
});

