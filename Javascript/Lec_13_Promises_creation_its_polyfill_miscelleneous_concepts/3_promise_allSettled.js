/**
 *  allSettled(): returns a promise that fullfills with an array of objects representing 
 *        the settled states of promise in the iterable, regardless of fullfillment or rejection.
 */

const promise1 = Promise.resolve(20);

const promise2 = Promise.reject('Some error');

const promise3 = Promise.resolve(true);

Promise.allSettled([promise1, promise2, promise3]).then((val) => {
    console.log(val);
    /**
     * [
            { status: 'fulfilled', value: 20 },
            { status: 'rejected', reason: 'Some error' },
            { status: 'fulfilled', value: true }
        ]
    */
});