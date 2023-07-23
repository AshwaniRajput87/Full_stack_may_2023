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
console.log(sym1 === sym2, sym3 === sym4); // false true

/***
 *  Symbol("one"):  
 *     - creates a new unique symbol each time it is called. 
 *     - unique symbol instance that cannot be shared or accessed elsewhere.
 *  Symbol.for("two"):
 *     - creates a global symbol that is registered in a global symbol registry. 
 *     - If a symbol with the given key (in this case, 'two') already exists in the registry, it will be returned; 
 *       otherwise, a new symbol will be created and added to the registry.
 * 
 *   That's why:
 *     const sym1 = Symbol("one");
 *     const sym2 = Symbol("one"); both will create unique instance and can not be shared or accesses elsewhere.
 *        - so if you do sym1 === sym2 // false
 *     const sym3 = Symbol.for("two");
 *     const sym4 = Symbol.for("two");// creates a global symbol that is registered in a global symbol registry and 
 *                                       second time two already exists in global symbol registry then it will be returned.
 *        -so if you do sym3 === sym3 // true   
 */






