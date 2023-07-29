const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function CustomPromise(executorFn) {
  let state = PENDING;
  let value = undefined;
  let scbArr = [];
  let fcbArr = [];

  const resolve = (val) => {
    if (state !== PENDING) return;
    state = RESOLVED;
    value = val;
    scbArr.forEach((cb) => cb(value));
  };

  const reject = (err) => {
    if (state !== PENDING) return;
    state = REJECTED;
    value = err;
    fcbArr.forEach((cb) => cb(value));
  };

  this.then = function (onResolved, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const handleResolved = (val) => {
        try {
          const returnValue = onResolved ? onResolved(val) : val;
          resolve(returnValue);
        } catch (err) {
          reject(err);
        }
      };

      const handleRejected = (err) => {
        if (onRejected) {
          try {
            const returnValue = onRejected(err);
            resolve(returnValue);
          } catch (err) {
            reject(err);
          }
        } else {
          reject(err);
        }
      };

      if (state === RESOLVED) {
        handleResolved(value);
      } else if (state === REJECTED) {
        handleRejected(value);
      } else {
        scbArr.push(handleResolved);
        if (onRejected) {
          fcbArr.push(handleRejected);
        }
      }
    });
  };

  this.catch = function (onRejected) {
    return this.then(undefined, onRejected);
  };

  //3. call the executor function
  executorFn(resolve, reject);
}

CustomPromise.myPromiseAll = function (arrayOfPromises) {
  return new CustomPromise(async (resolve, reject) => {
    let unresolved = arrayOfPromises.length;
    const resolvedPromiseArr = [];

    if (unresolved === 0) {
      resolve(resolvedPromiseArr);
      return;
    }

    for (const promise of arrayOfPromises) {
      try {
        const value = await promise;
        resolvedPromiseArr.push(value);
        unresolved--;
        if (unresolved === 0) {
          resolve(resolvedPromiseArr);
        }
      } catch (err) {
        reject(err);
        return;
      }
    }
  });
};

const promise1 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    //const data = { name: 'Ashwani Rajput' };
    const data = null;
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

CustomPromise.myPromiseAll([promise1, promise2, promise3]).catch((error) => {
  console.log(error);
});
// CustomPromise.myPromiseAll([promise1, promise2, promise3]).then((data) => {
//   console.log(data);
// });
