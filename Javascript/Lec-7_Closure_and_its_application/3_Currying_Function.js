/**
 *  What is currying function?
 *   - It's a technique in functional programming, that transforms a function with
 *     multiple arguments into several functions of a single param that will be returned sequetially.
 *
 *    function sum(param1, param2, param3, ...paramN) {};
 *     1. sum(1,2,3);
 *
 *     2. curried version of sum(1)(2)(3);
 */

// const sum = function (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// };

// let a = sum(1);
// let b = a(2);

// console.log(b(3));

// console.log(sum(1)(2)(3));

// sum(1)(); // 1
//sum(1)(2)(3)(); // 6
// sum(1)(2)(3)(4)(); // 10
// sum(1)(2)(3)(4)(5)(); // 15

const sum = (a) => {
  return (b) => {
    if (b) {
      // some logic need to put here
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)()); // 1 and b will be skipped because of undefined value
console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4)()); // 10
