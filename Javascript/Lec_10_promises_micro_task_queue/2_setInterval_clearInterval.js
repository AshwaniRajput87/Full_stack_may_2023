/**
 *  - setInterval():
 *    - Repeatedly calls a function at a specified interval.
 *    - syntax:
 *       - setInterval(function, delay, param1, param2,...)
 *       - returns a timerId Which is +ve interger number
 *
 *  - clearInterval():
 *     - stops a repeated execution of function
 *     - syntax:
 *        - clearInterval(timerID)
 */

// console.log("Before");

// const cb = () => {
//   console.log("Interval called");
// };

// const timerID = setInterval(cb, 1000);

// const cancelInterval = () => {
//   console.log("Cancelling the setinterval");
//   clearInterval(timerID);
// };

// setTimeout(cancelInterval, 5000);

// // console.log(timerID);

// console.log("After");

// real world example is Polling.

// let counter = 0;
// let MAX_RETRY = 3;

// const intervalId = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter === MAX_RETRY) {
//     clearInterval(intervalId);
//     console.log("Interval has been stopped");
//   }
// }, 1000);

/**
 * IQ: cb -> of setTimeout -> higher precedence than cb of setInterval - Why? --> it will be always w.r.t delay
 */

// console.log("Before");

// const cb = () => {
//   console.log("Interval called ");
// };
// const timerId = setInterval(cb, 1000);

// const cancelInterval = () => {
//   console.log("cancelling the interval timer");
//   clearInterval(timerId);
// };

// setTimeout(cancelInterval, 500);

// console.log("after");

// {a break of 5mins} - meet at 8:40AM

/**
 *   Write the polyfill of setInterval() and clearInterval()
 *     - create the polyfill of setInterval() with the help of setTimeout()
 */

const myInterval = (cb, delay) => {
  // primitive value : get different memory reference
  //  - solution: non-primitive (object) -> it will have same memory reference

  // polyfill of setInterval() - setTimeout that is called at a given interval again and again
  // Learning:  whenever you want a single source of truth -> use non-primitive

  // polyfill of clearInterval() - a fn that recieves an object and it changes it's property to false
  //                  and setInterval only executes the further setTimeouts on the basis of flag.

  let obj = {
    flag: true,
  };
  const myfn = () => {
    if (obj.flag === true) {
      cb();
      setTimeout(myfn, delay);
    }
  };
  setTimeout(myfn, delay);
  return obj;
};

const myClearInterval = (obj) => {
  obj.flag = false;
};

const cb = () => {
  console.log("This cb has been invoked");
};

const obj = myInterval(cb, 1000);

const cancelInterval = () => {
  console.log("Cancelled the cb");
  myClearInterval(obj);
};

setTimeout(cancelInterval, 5000);
