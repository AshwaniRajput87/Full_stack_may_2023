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

CustomPromise.myPromiseAll = function (arrayOfPromises) {
    return new CustomPromise((resolve, reject) => {
        let unresolved = arrayOfPromises.length;
        const resolvedPromiseArr = [];

        if (unresolved === 0) {
            resolve(resolvedPromiseArr);
            return;
        }

        arrayOfPromises.forEach(async (promise) => {
            try {
                const value = await promise;
                resolvedPromiseArr.push(value);
                unresolved--;
                if (unresolved === 0) {
                    resolve(resolvedPromiseArr);
                }
            } catch (err) {
                // catch block is not working: TODO
                console.log('rejected 2 ');
                //return 'reject';
                reject(err);
                return;

            }
        });
    });
}

// Write polyfill of allSettled() HW


// Creating couple of promise
const promise1 = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        const data = { name: 'Ashwani Rajput' };
        //const data = null;
        if (data) {
            resolve(data);
        } else {
            reject(new Error('Promise Rejected'));
        }
    }, 1000);
});

const promise2 = new CustomPromise((resolve) => {
    resolve(99);
});

const promise3 = new CustomPromise((resolve) => {
    resolve('Promise 3 has resolved');
});


// consumption of your promise
CustomPromise.myPromiseAll([promise1, promise2, promise3]).then((data) => {
    console.log(data);
})

CustomPromise.myPromiseAll([promise1, promise2, promise3]).catch((data) => {
    console.log(data);
});

