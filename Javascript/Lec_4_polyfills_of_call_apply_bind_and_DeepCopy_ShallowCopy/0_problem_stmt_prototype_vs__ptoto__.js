/**
 * Problem stmt:
 * Can you implement the computeAmount function to add all the numbers 
 * which are passed in the parameters? 
 * const computeAmount = (){ }; 
 * console.log(computeAmount().value()) //0
 * console.log(computeAmount().lacs(2).value()) //2,00,000 
 * console.log(computeAmount().lacs(2).lacs(20).value())//22,00,000 
 * console.log(computeAmount().lacs(15).lacs(20).lacs(7).value()) //42,00,000
 * 
 * computeAmount().value(); // 0  amount = 0;
 * computeAmount().lacs(2).value()// 2,00,000 ,   amount = amount + num * 100000
 * computeAmount().lacs(2).lacs(20).value()// 22, 00, 000, amount = amount + num * 10000
 * computeAmount().lacs(15).lacs(20).lacs(7).value()// 42, 00, 000
 */

const computeAmount = () => {
    let amount = 0;

    const value = () =>{
        return amount;
    }

    const lacs =(num) => {
        amount = amount + num * 100000;
        return {lacs, value}
    }

    return {lacs, value}
}

console.log(computeAmount().value()) //0
console.log(computeAmount().lacs(2).value()) //2,00,000 
console.log(computeAmount().lacs(2).lacs(20).value())//22,00,000 
console.log(computeAmount().lacs(15).lacs(20).lacs(7).value()) //42,00,000

/**
 * prototype: is  property on constructor functions that is used to define and
 * share the methods and properties among the intances/objects of constructor 
 * function.
 * 
 *   VS
 * 
 * __proto__: is a  property on individual objects that allow them to access 
 * and modify the methods and properties from their prototype chain.
 * 
 * 
 *   In JAVA, you create object something like that:
 * 
 *    class A {
 *     
 *    }
 * 
 *    A a1 = new A();
 * 
 */


// Example of Inheritance via __proto__

function Payment() {
    this.status = 'pending';

    // this.process = function() {

    // }
}

Payment.prototype.process = function() {
    console.log('Payment is processed');
}

const payment1 = new Payment();
console.log(payment1.process());

// Child class
function Transaction(amount) {
    this.amount = amount;
}

Transaction.prototype.__proto__ = Payment.prototype; // utilization of __proto__

const transaction1 = new Transaction(1000);

transaction1.process();

transaction1.status = 'completed';

console.log(transaction1.status);

console.log('Your amount is ', transaction1.amount);



