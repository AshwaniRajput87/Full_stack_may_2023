/**
 *   Shallow copy and Deep copy
 * 
 *     - Problem with repect to call by reference:
 * 
 *        if i modified the copied value from original one and 
 *        then will also modieifed the original value.
 * 
 *     -Eg:
 *         let person = { // call by reference
 *             name: 'Ambati',
 *             age: 28
 *         }
 *   
 *         const person1 = person;
 *       
 *         person1.age = 28;

        console.log('Copied data ',person1);
        console.log('Original Data ', person);

        How can i solve above problem? --> With the help of shallow copy

 *      Shallow copy: it  will create a new copy of top-level properties of an object 
                     but it does not create a copy of nested properties rather than it will 
                     the reference of original copy of nested object's properties
 * 
 */


let person = { // call by reference
    name: 'Ambati',
    age: 32
}
const person1 = person;

person1.age = 28;

console.log('Copied data ',person1);
console.log('Original Data ', person);

// Shallow copy:

 const student1 = {
    name: 'Amit',
    age: 33,
    address: 'Banglore'
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

 /***
  *  There several ways to create shallow copy of an object:
  *  1. spread operator.
  *  2. Object.assign().
  *  3. Object.create().
  */ 

 const obj = {};
 const student3 = Object.assign(obj, student1);
 // const student3 = {...student1};
 student3.address = 'Delhi';
 console.log('Modified object ', student3);
 console.log('Original object ',student1);

 console.log("Obj object: ",obj);
 console.log("student 3: ",student3);



//  const student4 = Object.assign({}, student2);

//  student4.name.firstName = 'Hemant';
//  student4.address.zipcode = 23009;
//  student4.age = 39;

//  console.log("Student4: ", student4);

//  console.log("Original Data of Student2: ",student2);


 // To solve the nested object modified values in the original object, 
// you need to use deep copy.

/***
 * Deep copy: creates an entirely independent copy of an object or array, 
 * including the nested objects or array.
 * 
 * There will be no impact on copied objects even they are nested one.
 * 
 * ways to achive the deep copy.
 * 1. JSON.parse() + JSON.stringify()
 * 2. lodash library and its cloneDeep(obj);
 * 3. polyfill of deep copy.
 * 
 */

const student5 = JSON.parse(JSON.stringify(student2));

 student5.name.firstName = 'Hemant';
 student5.address.zipcode = 23009;
 student5.age = 39;

 console.log("Student5: ", student5);

 console.log("Original Data of Student2: ",student2);




