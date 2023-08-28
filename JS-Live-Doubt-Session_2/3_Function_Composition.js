/***
 *  Function Composition:
 *      - a process of combining 2 or more functions to produce a new function.
 *      - addAndSquare(2,3); // 25
 *      - addAndSquare(3,3); // 36
 */

const square = (num) => {
    return num * num;
}

const add = (a, b) => {
    return a+b;
}

const addAndSquare = (a,b) => square(add(a,b));
console.log(addAndSquare(2,3));
console.log(addAndSquare(3,3));



