/***
 * Application of a closure
 * - How to memoize a function?
 *     - keep something in memory and use it later
 *
 *  Memoization:
 *      - Intuition - sum calculation take a lot of time with increased value of n.
 *      - Memoization - It's a technique which is used to optimize a function call
 *        by caching its result. -> useMemo()
 */
function calc(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
}

// console.time();
// console.log(calc(10000));
// console.timeEnd();

const memoize = (fn) => {
  // refernce calc(10000)
  let cache = {};
  return function (n) {
    if (cache[n] !== undefined) {
      return cache[n];
    } else {
      const res = fn(n); //res= calc(10000)
      cache[n] = res;
      return res;
    }
  };
};

console.time();
console.log(memoize(calc(10000)));
console.timeEnd();

console.time();
console.log(memoize(calc(10000)));
console.timeEnd();
