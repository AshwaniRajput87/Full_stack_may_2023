/**
 *  Generator Function:
 *    - these are those functions that can paused and resumed during the execution 
 *      that you allow to genarate a sequence of values.
 * 
 *    - syntax:
 *       function* myGenFn() {
 *        // write your logic
 *           yield value 1;
 *         // some more code you can invoke here
 *          yield value 2;
 *          ...
 *          yield value n;
 *       }
 * 
 *    - When you call a generator function, it doesn't execute the whole function at once.
 * 
 *    - it returns you an iterator object.
 * 
 *    - Each time you call next(), the generator function will execute until it reaches 
        a yield statement, at which point it will pause and return the value specified 
        by yield.
 */

// Example:

function* countDown(count) {
    while (count > 0) {
        const signal = yield count;
        //console.log('Recieved Signal', signal);
        count--;
    }
}

const iterator = countDown(5);

//console.log(iterator);

console.log(iterator.next().value);


console.log(iterator.next('Pause me here').value);

console.log(iterator.next().value);

console.log(iterator.next().value);
console.log(iterator.next().value);


/**
 * 
 *  Symbol:
 *     - It's primitive data type introduced in ES6.
 *     - represents the unique and immutable value;
 *     - Symbols are not enumerable
 * 
 *  BigInt
 *     - It's a numeric data type introduced in ES6.
 *     - represents the maximum larger number.
 * 
 */

var largeNum = 1233435346464564575475475477623786276378278n;

console.log(largeNum + 1n);

const mySymbol = Symbol();

const obj = {
    [mySymbol]: 'This is a private value'
}


console.log(mySymbol);

console.log(obj[mySymbol]);

//console.log(obj.mySymbol);

console.log(Object.keys(obj));


//doubts:

const sym1 = Symbol("one");
const sym2 = Symbol("one");
const sym3 = Symbol.for("two");
const sym4 = Symbol.for("two");
console.log(sym1 === sym2, sym3 === sym4);





