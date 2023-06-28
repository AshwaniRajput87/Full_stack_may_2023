/***
 *   What is polyfill?
 * 
 *    - Polyfills are code snippets or javascript libraries that provide functionality
 *      to the old browsers or environments that do not support those fatures natively.
 *   
 *    - To provide backward compatability and enable your code to run older systems.
 * 
 *    - Lets write the polyfill of deep copy/ deep clone.
 * 
 *    - Eg:
 *       const student2 = {
            name: {
                firstName: 'Amit',
                lastName: 'Kumar'
            },
            age: 33,
            address: {
                street: 'A-Block',
                city: 'Banglore',
                country: 'India',
                zipcode: '200456'
            }
        }

        Algo:
        1. Take an object (must nested object)
        2. Assign old object to new object.
        3. check the old object is an object or not?
        4. if yes,  then check its an array of object or object only, 
           then assign [] : {} in the new object variable.
        
            4.1. create a loop, then recursively copy object into new object.
        5. return new object.
 * 
 * 
 */

const deepClone = (obj) => {
  let newObj = obj; 

  if(obj && typeof obj !== 'object') {
    return obj;
  } else {
    //newObj = Object.prototype.toString.call(obj) === "[object Array]"   ? [] : {}; // "[object Array]"
    newObj = Array.isArray(obj) ? [] : {};

    for(let i in obj) {
        newObj[i] = deepClone(obj[i]);
    }
    return newObj;
  }
}


const student2 = {
    name: {
        firstName: 'Amit',
        lastName: 'Kumar'
    },
    age: 33,
    address: {
        street: 'A-Block',
        city: 'Banglore',
        country: 'India',
        zipcode: '200456'
    }
}

let student3 = deepClone(student2);

student3.address.city = "Delhi";

console.log(student3);

console.log(student2);

let cartItems = [
    {product: 'Laptop', price: 50000.00},
    {product: 'Tablet', price: 45000.00},
    {product: 'mobile', price: 20000.00},
];

// cartItems.forEach(()=>{

// });

let updatedCartItems = deepClone(cartItems);

console.log(updatedCartItems);