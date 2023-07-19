/**
 *  race(): returns a Promise that fullfills or rejects as one of Promises 
 *          in the iterable fullfills or rejects
 * 
 *          In simple terms -> takes an array of promises and returns a new promise 
 *          that settles as soon as any of the input promises settles, 
 *          either by resolving or rejecting.
 * 
 *  when to use?
 *    - useful when you want to wait for the fastest promise to complete, regardless it fullfills or rejects
 * 
 */


const promise1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Resolve 1'));

const promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Resolve 2'));

Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});
