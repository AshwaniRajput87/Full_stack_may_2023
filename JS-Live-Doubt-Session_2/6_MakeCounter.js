/****
 *   const counter = makeCounter();
 *      counter(); // 0
 *      counter(); // 1
 *      counter();  // 2
 *        with a custom initial value
 * 
 *     const counter = makeCounter(2);
 *     counter(); // 2
 *     counter(); // 3
 *     counter();  // 4
 */

const makeCounter = (initialVal = 0) => {
    let count = initialVal;
    return () => {
       //count++;
       return count++;
    }
}

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const counter = makeCounter(5);
// counter();

const counter = makeCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());