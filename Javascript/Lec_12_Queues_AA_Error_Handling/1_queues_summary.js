/***
 *   1. Microtask queue: microtasks such as callbacks of promises, callabacks of mutation observer,
 *      callback of queueMicrotask() are executed here.
 * 
 *   2. Animation queue: callbacks of requestAnimationFrame() are executed here
 * 
 *   3. Callback Queue/ Macrotask queue: callbacks of timers (setTimeout, setInterval), network requests(fetch),
 *      DOM events(click events, input events) are executed here.
 * 
 *   // sync code > Microtask queue > Callback queue ~= Animation frame queue
 */