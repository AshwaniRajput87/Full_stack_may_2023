/**
 *  memoize a function
 */

const calc = (n) => {
   let sum = 0;

   for(let i = 0; i < n; i ++) {
     sum+=i;
   }

   return sum;
}

const memoize = (fn) => {
    let cache = {};
    return (n)=> {
       if(cache[n] !== undefined) {
          return cache[n];
       } else {
           const res = fn(n); // calc(10000)
           cache[n] = res;
           return res;
       }
    }
}

const efficientCalcFn = memoize(calc);

console.time();
console.log(efficientCalcFn(10000));
console.timeEnd();

console.time();
console.log(efficientCalcFn(10000));
console.timeEnd();

