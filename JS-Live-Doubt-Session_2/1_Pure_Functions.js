/***
 *  Pure function:
 *     - a function that always produces the same output 
 *       for the same input and 
 *       have no side effects(it doesn't modify the external variable or states).
 */


// Impure function
let  x = 0;

function addToX(num) {
    return x += num;
}

console.log(addToX(10)); // 10
console.log(addToX(20)); // 30


// pure function
function add(a,b) {
    return a+b;
}

console.log(add(3,5));// 8
console.log(add(2,8));// 10