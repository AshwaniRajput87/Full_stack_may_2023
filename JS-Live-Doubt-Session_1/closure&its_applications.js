/***
 *  What is lexical scope?
 *    - refers to the scope of variable which is deteremined by its position 
 *      in the source code during the execution phase.
 *  What is outer scope?
 *      let c = 10;
 *    - function outer(a) {
 *         function inner(b) {
 *           return a+b;
 *         }
 *      }
 *    - Every function has the access of its' own variable and any varaiable declared outside.
 */

var x = 10;

function fn() {
    var x = 20;
    console.log(x);
}

fn();


/***
 * Closure:
 *    - When a function is hoisted at that point of time it forms closure over the outer variables.
 * 
 * It's application:
 *    - currying function: sum(1)(2)(3)();
 *    - memoization
 * 
 */

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}
const innerFunc = outerFunction();
console.log(innerFunc())  // 1
console.log(innerFunc())


  // JS Engine -> heap
       // temp memory is allocated to theis closure -> count = 0 -> 1  // when first innerFunc()
       //                                           -> count = 1 -> 2  // when first innerFunc()

