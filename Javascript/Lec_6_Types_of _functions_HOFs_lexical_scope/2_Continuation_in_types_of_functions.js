/**
 *   What is function ?
 *     - A reusable piece of code that performs some specific task.
 * 
 *   What do you mean by function as an object?
 * 
 *     - In Javascript, functions are objects that can be assigned in a variable, 
 *       can pass as an arguments to other function and can store functions 
 *       in a data structure(array, object).
 * 
 *     - They can properties and methods just like any other object.
 *       Example: computeAmount() -> Visit Lecture no JS-3/4
 *       This is the example of  computeAmount = (){}
 *       const computeAmount = () => {
 *           let amount = 0;
 *
 *           const value = () =>{
 *               return amount;
 *           }
 *
 *           const lacs =(num) => {
 *              amount = amount + num * 100000;
 *              return {lacs, value}
 *           }
 *
 *           return {lacs, value}
 *       }
 *       console.log(computeAmount().value()) //0
 *       console.log(computeAmount().lacs(2).value()) //2,00,000 
 *       console.log(computeAmount().lacs(2).lacs(20).value())//22,00,000 
 */

/**
 *  Types of functions in JS:
 *  
 *   1. named function: A function that has a name.
 *   2. Annonymouns function: A function that doesn't have any name.
 *   3. Function Expression: when you store an annonymous function in a variable.
 *   4. Arrow function: It's a compact syntax for writing the functions. (introduced in ES6)
 *   5. IIFE(Immediately Invoked function Expression): 
 *          When a function is immediately exceuted after it is defined is known as IIFE.
 *          need not to explicity called the function, it's executed automatically onload of script.
 *   6. Recursive function: Functions that call themselves util a base condition is met.
 *   7. callback: When a function is passed as an argument to another function and 
 *      invoked at later point in time
 *   8. Higher Order function: A function that accepts other functions as arguments 
 *       or returns a function itself.
 *      - Map
 *      - Filter
 *      - reduce
 *      - forEach
 */


// 1. named function
function greetMsg() {
    console.log('Hello Ashwani');
}

greetMsg();

//2. Annonymouns function:
// function() { 
//     console.log('Hello Ashwani');
// }


//3. Function Expression
const greet = function() { 
    console.log('Hello Sunil');
}

greet();

//4. Arrow function

const greetMsg_2 = () => {
    console.log('Hello Shiv!');
}

greetMsg_2();

// Multiply 2 numbers via arrow function.

const mul = (a,b) => a*b;

console.log(mul(10,5));

// 5. Resursive Function

// const fact = (n) => {
//     if(n===0 || n===1) {
//         return 1;
//     }

//     return  n*fact(--n);   // 5*4*3*2*1

//     // n-- --> 5 then 4
// }

// console.log(fact(5)); // 120;

// 6. IIFE (Immediately Invoked Function Expression):

(function(){
    console.log("Hello Ashwani");
})();

   /***
    *  Usecases of IIFE:
    *   1. Encapsulation: wrapping up of variables and methods
    *   2. Data privacy
    *   3. Module Pattern
    *   4. Avoiding Hoisting problem
    *   5. Dependency Injection.
    *   6. To Check the Browser compatability.
    */


// Module Design Pattern

   const module = (function(){
      const data = 10;
      
      const privateFunc = () => {
        console.log('Data is ',data);
      }

      // public function
      const init = () => {
        privateFunc();
      }
      return {
        init
      }
       
   })();

   module.init();

   /**
    * Dependency Injection:
    * const module = (function(loadash){
    * const loadash = require('lodash');
      const data = 10;
      
      const privateFunc = () => {
        console.log('Data is ',data);

        lodash.deepclone(data);
      }

      // public function
      const init = () => {
        privateFunc();
      }
      return {
        init
      }
       
     })(lodash);
    */

     //7. callback function:

       const calculateSquare = (num, callback) => {
           const result = num * num;
           callback(result);
       }

       calculateSquare(5, (result)=> {
         console.log('The square of a number is ', result);
       });

       const  getData = (url, fn) => {
         // fetch API or Axios;
         const data = 'Amit Gupta';
         fn(data);
       }

       const processedData = (data) => {
          console.log('Data is: ', data);
       }

       getData('http://uat.sample.com/v1/getUserDetails', processedData);

    

    //    const domManipulation = ()=> {

    //    }
    //    document.addEventListener('click',domManipulation);

 

    // 8. Higher Order Function:
    const hoc = (fn) => {
        fn();
    }
    
    hoc(()=> {
        console.log('Hello Ambati!');
    });

    // HOF: returns a function itself

      const greetMsg_4 = (prefix) => {
        return (name) => {
          console.log(`${prefix} ${name}`);
        }
      }

      const greetPerson = greetMsg_4("Hello");

      greetPerson("Ashwani");

      const greetPerson_1 = greetMsg_4('Hi');

      greetPerson_1('Shiv');



      /**
       * 
       * In-built HOF:
       * 1. map(): creates a new array by calling a provided function on every elements in the array.
       * 2. filter(): returns an array by filtering out the data based the provided function.
       * 3. reduce():  Applies a function to an accumulator and each element in an array to a single value.
       * 4. forEach()
       */

      const cartItems = [
        {product: 'Laptop', price: 50000.00},
        {product: 'Tablet', price: 45000.00},
        {product: 'Mobile', price: 20000.00},
      ];

      // Get all the products.

      const allProducts = cartItems.map((item)=> {
         return item.product;
      });

      console.log(allProducts);

      // Filtering out the product items whose price > 20000

      const data = cartItems.filter((item)=>{
           return item.price > 20000;
      });

      console.log(data);

      // Add up the price of all carts items
      //array.reduce(initail_value, function);

      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price;
      }, 100);

      console.log(totalPrice);

      // print product name and product price with comma separated values via forEach()




    
     


      




