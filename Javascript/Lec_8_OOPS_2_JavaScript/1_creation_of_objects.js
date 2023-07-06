/**
 *
 *  ways to create objects:
 *  1. Object literal -> ES5
 *  2. Object.create() -> ES5
 *  3. Function constructor -> ES5
 *  4. Class (ES6)
 *
 */

/**  1. Object literal: a comma-separated list of name-value/key-value pairs
 *      inside of curly braces.
 *
 *      contains properties and methods.
 *      Object -> as your prototype Parent
 *
 * *****/

// let obj = {
//   name: "Pradeep K R",
//   address: {
//     city: "Banglore",
//     country: "India",
//   },
//   greetMsg: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// obj.greetMsg();

/**
 *  this works on the basis of surrounding context(means scope of this keyword).
 *      obj -> this (window object)
 *      obj2 -> obj -> there no name defined w.r.t "this" on obj2, this have the
 *                     surrounding context w.r.t "obj"
 *
 */

// let obj = {
//   name: "Pradeep K R",
//   address: {
//     city: "Banglore",
//     country: "India",
//   },
//   greetMsg: function () {
//     console.log(`Hello, ${this.name}!`);
//   },

//   obj2: {
//     //username: this.name, // empty string
//     username: "",
//   },
// };

//obj.obj2.username = obj.name;

// obj.obj2 = {
//   username: obj.name,
// };

// console.log(obj);

let arr = [];

console.log(arr);

/***
 *   array (arr) -> Array
 *   function -> Function
 *   object(obj) -> Object
 *   for primitive values -> What does JS do for the primitive values?
 *        When you assign any primitive values to a variable,
 *        JS creates a temporary wrapper object for them to access the properties
 *        and methods on those variables.
 *
 *   What is temporary wrapper object?
 *
 *      -An object that is created when you try to access
 *       the properties and method on a primitive value.
 *
 *   Whenever you try to acces properties and methods on a primitive value
 *   such string, number, boolean, JS automatically wraps the primitive values with an
 *   an object of the corresponding the wrapper type.
 *   This process is known a s autoboxing or autowrapping.
 *
 *   string -> String
 *   number -> Number
 *   boolean -> Boolean
 *
 */
// str -> String -> Object
let str = "Hey i am a string";
console.log(str);

const firstAlphabet = str.charAt(0).toLowerCase(); // doing the method chaining
console.log(firstAlphabet);

console.log(String.prototype);

// num -> Number -> Object
let num = 2.8889;

console.log(num.toFixed(2));

console.log(Number.prototype);

// To check the parent of object explicity, you use Object.getPrototypeof()

let date = new Date();
console.log(Object.getPrototypeOf(date));
console.log(Object.getPrototypeOf(str));

/**
 *  2. Object.create()
 *
 */

let obj = {
  name: "Pradeep K R",
  address: {
    city: "Banglore",
    country: "India",
  },
  greetMsg: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

console.log("obj:", obj);

const obj2 = Object.create(null);

console.log("obj2: ", obj2); // Empty object with no properties and methods

/**
 * obj3--> {} --> [Prototype] Object -> obj -> Parent (Object)
 */

const obj3 = Object.create(obj);

console.log("Obj3:", obj3); //

/**
 * obj3--> {name: 'Ashwani'} --> [Prototype] Object -> obj -> Parent (Object)
 */

obj3.name = "Ashwani";

console.log(obj3); //

obj2.name = "Anshu"; //
obj2.lastName = "Kumar"; //

console.log(obj2);

// overridden the prop name value
console.log("1. ", obj2.name); // Anshu
console.log("2. ", obj2.lastName); // Kumar
console.log("2. ", obj.lastName); // undefined

console.log(obj3.isPrototypeOf(obj)); // false
console.log(obj.isPrototypeOf(obj3)); // true

// obj3 -> obj(parent) -> Object(parent)

/**
 * loop -> object -> for in loop -> iterate over all the prop of an object, inherited the parent Object props
 */
for (let key in obj) {
  // accessing the prop name, address and greetMg
  console.log("Keys of obj:", key);
}

for (let key in obj2) {
  // accessing the prop name, lastName
  console.log("Keys of obj:", key);
}

obj3.friends = ["Amit", "Sumit"];

for (let key in obj3) {
  // accessing the prop name, address, greetMsg, friends
  console.log("Keys of obj3:", key);
}

// access the properties of obj3 only not obj. -> hasOwnProperty(key)

for (let key1 in obj3) {
  let isMyKey = obj3.hasOwnProperty(key1); // get the key of own object obj3 not the parent object
  if (isMyKey) {
    console.log("Obj3 keys:", key1);
  }
}

/**
 *  Inheritance : reusability
 *   1. unidirectional flow of data
 *       a. if you don't have a prop/method -> you use prop/methods of prototype chain
 *       b. if you have a prop/method -> you can use your props/methods
 */

/**
 * is Object.create() creates a same reference or different reference w.r.t existing obj?
 *    - It doesn't create a reference to an existing object but rather creates
 *      a new object with prototype link.
 *
 *
 * is object literal creates a same reference or different reference?
 *   - Each time you define an object literal to create object,
 *     a new object is created with its own set of properties and methods.
 *
 *   - created in different memory/ having different reference.
 *   - Modifying one object does not affect another object
 *     defined using object literal. ()
 *
 *
 */
const obj4 = {};
const obj5 = {};

console.log(obj4 === obj5); // false

/**
 * 3. Function Constructor (before ES6)
 */
function Person(name, age) {
  //console.log(this);
  this.name = name;
  this.age = age;

  this.greetMsg = function () {
    console.log(`Hi I am ${this.name} and my age is ${this.age}`);
  };
}

const john = new Person("John", 38);
console.log(john);
john.greetMsg();
const rohant = new Person("Rohant", 32);
console.log(rohant);
rohant.greetMsg();

/**
 *  class in ES6
 */

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetMsg() {
    console.log(`Hi I am ${this.name} and my age is ${this.age}`);
  }
}

const sunil = new Person1("Sunil", 34);
console.log(sunil);
sunil.greetMsg();

/**
 * Inheritance via classes
 */

class SuperHuman extends Person1 {
  constructor(name, age) {
    super(name, age);
  }

  sayHi() {
    console.log(`Hi I am ${this.name} and my age is ${this.age}`);
  }
}

const superHuman = new SuperHuman("Balram", 34);
console.log(superHuman);
/**
 *  if you create the object of child class, then you can props/methods of
 *  both child class and parent class.
 */

/**
 *  Inheritance: reusability 1. code sharing, and 2. saving memory
 *
 *  prototype is: if you create an object from an existing object -> that object is your parent or prototype
 *
 *  prototypal inheritance: you inherit properties and methods
 *   from the parent object or proptotype object.
 *
 *  prototype chaining:
 *     - In JavaScript, every object has an internal link
 *       to another object called its prototype.
 *
 *     - When you access a property or method on an object,
 *       JavaScript looks for that property or method on the object itself,
 *       if that is not found in that object then it will go
 *       till it's prototype object(parent).
 *
 *
 *
 *
 *  __proto__: an object to access parent object properties and methods
 */

let object = { name: "Ashwani" };

console.log(object);

let arr1 = [1, 2];
console.log(arr1);

console.log(arr1.__proto__); // Array
console.log(arr1.__proto__.__proto__); //Object
console.log(arr1.__proto__.__proto__.__proto__); //null
