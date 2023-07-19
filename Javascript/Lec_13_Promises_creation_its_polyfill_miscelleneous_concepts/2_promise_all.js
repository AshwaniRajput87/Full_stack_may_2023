/**
 *  all():  returns a promise that fullfills when all promises in the iterable argument have fullfilled
 *          or rejects if any of them reject
 * 
 *  When to use it?
 *     - it is useful when you have multiple async operations and want to wait till all the promises has resolved 
 * 
 */

const promise1 = Promise.resolve(20);

const promise2 = Promise.reject('Some error');

const promise3 = Promise.resolve(true);

Promise.all([promise1, promise2, promise3]).then((val) => {
    console.log(val); //[20, 'Hello', true]
}).catch((err) => {
    console.log('Error occured', err);
})
