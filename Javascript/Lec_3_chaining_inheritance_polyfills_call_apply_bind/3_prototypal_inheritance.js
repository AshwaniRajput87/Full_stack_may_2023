/**
 *  What is inheritance?
 * 
 *    Means reusaibilty.
 *    
 *    It's a mechanism that allows objects to inherit properties and methods
 *    from other objects.
 * 
 *    Now lets understand  inheritance w.r.t javascript
 */
let obj = {};
console.log(obj);

let person = {
  name: 'Ashish',
  age: 30
}

console.log(person);
// obj/person ---> Object
console.log(person.hasOwnProperty('name')); //true
console.log(person.hasOwnProperty('gender')); //false

let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.push('hello'));
// arr ---> Array ---> Object


/**
 * 
 *  what is prototype?
 *    - A prototype is an object that links to a particular object by default.
 *    - Every object has a internal property called as [[Prototype]] which reference another object or null.
 *    
 *  What is prototypal inheritance?
 *     - allows objects to inherit properties and methods from their prototypes.
 * 
 *  What are the advantages of inheritance?
 *     1. reusabilty of code.
 *     2. saves the memory space.
 */

// const arr1 = [1,2,3,4];
// const arr2 = [1,2,3,4];

// arr1.sum = function() {
//   let sum = 0;
//     for(let i = 0; i<this.length; i++) {
//         sum+=this[i];
//     }
//     console.log(sum);
// }

// arr1.sum();
// console.log(arr1);

// console.log(arr2);
// arr2.sum = function() {
//     let sum = 0;
//       for(let i = 0; i<this.length; i++) {
//           sum+=this[i];
//       }
//       console.log(sum);
//   }
// arr2.sum();
// console.log(arr2);

/**
 * What is parent object of arr1/arr2?
 *  - Array
 */
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8,9];

Array.prototype.sum = function() {
    let sum = 0;
    for(let i = 0; i<this.length; i++) {
        sum+=this[i];
    }
    console.log(sum);
}

arr1.sum();
arr2.sum();
console.log(arr2);


// const account = {
//     balance: 0,
//     deposit(amount) {
//       if (amount > 0) {
//         this.balance += amount;
//         console.log(`Deposited ${amount} into the account. Current balance: ${this.balance}`);
//       }
//     },
//     withdraw(amount) {
//       if (amount > 0 && amount <= this.balance) {
//         this.balance -= amount;
//         console.log(`Withdrawn ${amount} from the account. Current balance: ${this.balance}`);
//       } else {
//         console.log('Insufficient funds.');
//       }
//     }
//   };

  
// const savingsAccount = Object.create(account);
// savingsAccount.interestRate = 0.05;
// savingsAccount.calculateInterest = function() {
//   const interest = this.balance * this.interestRate;
//   this.deposit(interest);
// };

// savingsAccount.deposit(1000);// 1000 deposited
// savingsAccount.withdraw(500); // 500 withdraw
// savingsAccount.calculateInterest(); // pending balance: 500 *0.05 interest = 25 + 500  = 525

// savingsAccount Object ---> account object ---> Object
//console.log(savingsAccount);

// usage of __proto__

const account = {
    balance: 0,
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into the account. Current balance: ${this.balance}`);
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from the account. Current balance: ${this.balance}`);
      } else {
        console.log('Insufficient funds.');
      }
    }
  };

  
let savingsAccount = {};
console.log(savingsAccount);
savingsAccount.__proto__ = account;
savingsAccount.interestRate = 0.05;
savingsAccount.calculateInterest = function() {
  const interest = this.balance * this.interestRate;
  this.deposit(interest);
};

savingsAccount.deposit(1000);// 1000 deposited
savingsAccount.withdraw(500); // 500 withdraw
savingsAccount.calculateInterest(); // pending balance: 500 *0.05 interest = 25 + 500  = 525


