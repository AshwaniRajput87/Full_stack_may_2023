/***
 *  prototypal inheritance:
 *    - [[protoptye]]
 *    - __proto__
 * 
 */

function Animal(name) {
   this.name = name;
}

Animal.prototype.makeSound = function() {
    console.log(this.name);
}

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
    console.log('Woof');
}

const shanky = new Dog('shanky');

console.log(shanky.name);

shanky.makeSound();

shanky.bark();

