/**
 * 
 *  any(): Takes an array of promises and returns a new promise
 *         that fulfills as soon as any input promise fulfills. 
 *       
 *         If all promises are rejected, the resulting promise is rejected with an AggregateError 
 *         containing all the rejection reasons.
 *
 *         Useful for handling multiple asynchronous operations and responding to the first successful 
 *         completion.
 */


const promise1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resolve 1'));

const promise2 = new Promise((reject) => setTimeout(reject, 1000, 'Rejected the promise'));

Promise.any([promise1, promise2])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });