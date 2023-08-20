/**
 *  function.call(context, arg1, arg2,...argN);
 *  function.apply(context, [arg1, arg2,...argN]);
 *  const fn = function.bind(context, arg1, arg2,...argN);
 *  fn();
 * 
 *  Polyfills -> code snippets or JS libs that 
 *               provide modern functionality to support 
 *               on to the old browsers
 * 
 *  polyfill of call():
 */


// Function.prototype.myCall = function (ctx, ...args) {
//     let currentCtx = ctx || globalThis;

//     currentCtx.fn = this; // this conatins the function that you are calling upon
   
//     let result = currentCtx.fn(...args);

//     delete currentCtx.fn;

//     return result; 
// }

// // function showPersonDetails(city, country) {
// //     console.log(`${this.firstname} ${this.lastname}, ${city} - ${country}`)
// // }

// // const person1 = {
// //     firstname: 'Ashwani',
// //     lastname: 'Rajput'
// // }

// // showPersonDetails.myCall(person1, 'Delhi', 'India');


// Function.prototype.myApply = function (ctx, args) {
//     let currentCtx = ctx || globalThis;

//     currentCtx.fn = this; // this conatins the function that you are calling upon
   
//     let result = currentCtx.fn(...args);

//     delete currentCtx.fn;

//     return result; 
// }

// function showPersonDetails(city, country) {
//     console.log(`${this.firstname} ${this.lastname}, ${city} - ${country}`)
// }

// const person1 = {
//     firstname: 'Amit',
//     lastname: 'Kumar'
// }

// showPersonDetails.myApply(person1, ['Banglore', 'India']);


Function.prototype.myBind = function (ctx, ...args) {
    const fn = this;
     
    return function(...innerArgs) {
        //return fn.apply(ctx, args.concat(innerArgs));
        return fn.apply(ctx, [...args, ...innerArgs]);
    } 
}

function showPersonDetails(city, country, developer) {
    console.log(`${this.firstname} ${this.lastname}, is a ${developer} from ${city} - ${country}`)
}

const person2 = {
    firstname: 'Gaurav',
    lastname: 'Kumar'
}

const showDetails = showPersonDetails.myBind(person2, 'Banglore', 'India');
showDetails('Software developer');




