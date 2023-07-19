/**
 * 
 *  any(): returns promise fullfills when any of the input's promises fufills, with this first fullfills or 
 *         rejects when all of the input's promises rejects
 * 
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