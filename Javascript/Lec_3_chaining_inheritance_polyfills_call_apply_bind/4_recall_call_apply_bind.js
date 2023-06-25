/**
 *   call, apply and bind.
 * 
 *   Problem exist before using call, apply and bind.
 *   1. Problem with context (this):
 * 
 *       - When a function is called/invoked, 
 *          this value inside the function depends on how  the function is called?
 * 
 *       - Howerver, there are scenarios/situations where developers  
 *         need to explicitly set the desried context for a function.
 * 
 *   2. Problem with parameter passing:
 * 
 *     - In JS, functions can accept params during function invokation.
 *     
 *     - However, there are scenarios where the functions arguments 
 *       need to be passed dynamically as an array or as an individual values.
 * 
 * 
 *      To solve above problems, we need to use call apply and bind.
 * 
 *       1. call(): used to invoke a function with a specified value and individual params.
 *                  syntax: function.call(thisArg, arg1, arg2, ... argn);
 * 
 *       2. apply(): it is similar to the call(), except the array of arguments you need to pass.
 *                  syntax: function.apply(thisArg, [arg1, arg2, ...argn]);
 * 
 *       3. bind(): bind creates a new function with a specified this value 
 *                  and pre-set the arguments, without immediate execution.
 *                  syntax: const fn =  function.bind(thisArg, arg1, arg2, ..argn);
 *                               fn();           
 */

  function greet(message) {
    console.log(`${message} ${this.name}`);
  }

  const person = {
    name: 'Amit'
  };

  const person2 = {
    name: 'Aditi'
  };

  const person3 = {
    name: 'Ashish'
  };

  greet('Hello');

  greet.call(person, 'Hi');

  greet.call(person2, 'Hello');

  greet.apply(person3, ['Awesome']);


const person4 = {
   name: 'Ashwani',
   greetMsg() {
    console.log(`Hello, my name is ${this.name}`);
   }
}

let boundGreetMsg = person4.greetMsg.bind(person3);

boundGreetMsg();

const person5 = {
    name: 'Hemant',
    sayHello: boundGreetMsg
}

person5.sayHello();

