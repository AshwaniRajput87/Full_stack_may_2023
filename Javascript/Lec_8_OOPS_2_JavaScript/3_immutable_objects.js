/**
 *  What is mutable in JS?
 *    - mutable means that can change.
 *    - objects whose properties can be modified after creation.
 *    - Mutable objects in JS are: objects, arrays and functions
 *
 *
 *  What is immutable in JS?
 *    - immutable means that can't change.
 *    - Primitive values: number, string, boolean, null, undefined
 *    - Temporary Warpper Object.
 *
 *    - eg: 5, false, 'ashwani'
 *    - let name = 'Ashwin';
 *
 *  - How to make objects immutable in JS?
 *     - For objects - use spread {...} or Object.assign() or deepClone()
 *     - For Arrays - use filter(), map() or reduce()
 *     - For objects - few other methods we have, to make objects immutable
 *          - Freezing properties:
 *               1. Object.freeze()
 *               2. Object.seal()
 *
 *    break - {let's meet at 8:23AM}
 *
 *     1. Object.freeze():
 *
 *         - freezes an object means making the object read-only and
 *           prevents the modifications to its properties.
 *
 *         - that means it returns the same object that was passed in Object.freeze()
 */

let obj = {
  name: "Ashwani",
  age: "35",
  address: {
    city: "Delhi",
    country: "India",
  },
};

console.log(obj);

//obj.name = "Amit";

// console.log(obj);

// const obj2 = { ...obj };

// obj2.name = "Anshu";

// console.log("Obj3: ", obj2);
// console.log("obj: ", obj);

// const obj2 = Object.freeze(obj);

// console.log(Object.isFrozen(obj)); // true

// obj2.name = "Ashwin";

// obj2.address.city = "Banglore";

// console.log(obj2);

/***
 * Then how to freeze the nested objects?
 *    - deepFreeze() - But in JS, there is no such in-built method available.
 */

const deepFreeze = (obj) => {
  // Freeze the one-level object itself
  Object.freeze(obj);

  // iterate over all the props
  for (let key in obj) {
    if (
      obj[key] !== null &&
      typeof obj[key] === "object" &&
      obj.hasOwnProperty(key)
    ) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
};

const obj3 = deepFreeze(obj);
obj3.address.city = "Banglore";
console.log("Obj3", obj3);

/**
 *  Object.seal():
 *    - also an in-built method in JS that seals an object.
 *    - prevents the properties from being added to it and
 *      marking all existing properties as non-configurable.
 *        - neither you can add nor remove the properties from an object
 *
 */

const obj1 = {
  name: "Amit",
  age: "30",
};
console.log(Object.isSealed(obj1)); // false
console.log(Object.seal(obj1));

console.log(Object.isSealed(obj1)); // true

obj1.name = "Gaurav";

obj1.city = "Banglore";

delete obj1.age;

console.log(obj1);

/**
 *  Object.defineProperty(object, property-name, descriptor)
 *
 */

const student = {
  firstName: "Gaurav",
};

Object.defineProperty(student, "getName", {
  get: function () {
    return this.firstName;
  },
  configurable: false,
  enumerable: true,
  writable: false,
});

Object.defineProperty(student, "changeName", {
  set: function (value) {
    this.firstName = value;
  },
});

console.log(student.getName);

console.log((student.changeName = "Gaurav Rathore"));

console.log("Students props,", student); // firtName, getName, changeName

for (let prop in student) {
  console.log("Props", prop);
}
