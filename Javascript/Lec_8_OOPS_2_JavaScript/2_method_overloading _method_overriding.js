/***
 * Method Overloading:
 *
 *    - having multiple methods with same name
 *      but different parameters within the same class.
 *
 *    - JS does not support method overloading direclty.
 *
 *
 *    - But you can achieve a similar affect
 *      by chekcing different number and type of arguments.
 *
 */

class MathUtils {
  // calculate(a, b) {
  //     return a+b;
  // }

  // calculate(a, b, c) {
  //     return a+ b+c;
  // }

  calculate(...args) {
    // ...args = [1,2,3]
    if (
      args.length === 2 &&
      typeof args[0] === "number" &&
      typeof args[1] === "number"
    ) {
      return this.calculateSum(args[0], args[1]);
    } else if (args.length === 1 && Array.isArray(args[0])) {
      return this.calculateAverage(args[0]);
    } else {
      throw new Error("Invalid arguments");
    }
  }

  calculateSum(a, b) {
    return a + b;
  }

  calculateAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
  }
}

const math = new MathUtils();

console.log(math.calculate(10, 20)); // 30

console.log(math.calculate([1, 2, 3, 4, 5])); // 15/5 = 3

/***
 *
 *  Method Overriding:
 *
 *    - means a subclass can provide its own implementation of a method
 *      inherited from the parent class(superclass)
 *
 *    - require 2 classes with inheritance and same methods name
 *       with same parameters within different classes
 *
 */

// class Shape {
//   calculateArea() {
//     throw new Error("Method is not implemented");
//   }

//   calculatePerimeter() {
//     throw new Error("Method is not implemented");
//   }
// }

// class Rectangle extends Shape {
//   constructor(length, breadth) {
//     super();
//     this.length = length;
//     this.breadth = breadth;
//   }

//   calculateArea() {
//     return this.length * this.breadth; // 200
//   }

//   calculatePerimeter() {
//     return 2 * (this.length + this.breadth); // 60
//   }
// }

// const rect = new Rectangle(10, 20);

// console.log(rect.calculateArea());
// console.log(rect.calculatePerimeter());

/**
 *  interface in JS?
 *    - An interface is a concept that defines a contract/schema
 *       or a set of requirements of an object.
 *
 *    - In JS, there is no concept of interface like you have in java.
 *
 */

// Defining the Shape interface using an abstract class

class Shape {
  calculateArea() {
    throw new Error("Method is not implemented");
  }

  calculatePerimeter() {
    throw new Error("Method is not implemented");
  }
}

class Rectangle extends Shape {
  constructor(length, breadth) {
    super();
    this.length = length;
    this.breadth = breadth;
  }

  calculateArea() {
    return this.length * this.breadth;
  }

  calculatePerimeter() {
    return 2 * (this.length + this.breadth);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const rec = new Rectangle(30, 40);
console.log(rec.calculateArea()); // 1200
console.log(rec.calculatePerimeter()); // 140

const circle = new Circle(2.5);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());

// In java

// interface Shape {
//     calculateArea();
//     calculatePerimeter();
// }

// class Rectangle implements Shape {

// }
