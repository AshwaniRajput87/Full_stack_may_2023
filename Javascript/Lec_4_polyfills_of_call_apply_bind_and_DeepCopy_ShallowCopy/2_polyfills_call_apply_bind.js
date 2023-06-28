/**
 *    function.call(context, arg1, arg2, ...,argN);
 *    function.apply(context, [arg1, arg2, ...,argN]);
 *    let fn = function.bind(context, arg1, arg2, ...,argN)
 *    fn(object, arguments);
 * 
 * 
 * 
 * 
 * 
 */

Function.prototype.myCall = function(context, ...args) {
    let currentContext = context || globalThis;

    let randomProp = Math.random();

    while(currentContext[randomProp] !== undefined) {
        randomProp = Math.random();
    }

    currentContext[randomProp] = this;

    let result = currentContext[randomProp](...args);

    delete currentContext[randomProp];

    return result;
}

function showPersonDetails(city, country) {
    console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const person1 = {
    firstName: 'Sunil',
    lastName: 'Kumar'
};

showPersonDetails.myCall(person1, "Banglore", "India");


Function.prototype.myApply = function(context, args) {
    let currentContext = context || globalThis;

    let randomProp = Math.random();

    while(currentContext[randomProp] !== undefined) {
        randomProp = Math.random();
    }

    currentContext[randomProp] = this;

    let result = currentContext[randomProp](...args);

    delete currentContext[randomProp];

    return result;
}

function showPersonDetails(city, country) {
    console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const person2 = {
    firstName: 'Amit',
    lastName: 'Kumar'
};

showPersonDetails.myApply(person2, ["Delhi", "India"]);


Function.prototype.myBind = function(context, ...args) { //["Bombay", "India"]
    const callback = this;

    return function(...innerArgs) { // fn('data', 'greetMsg');==> innerArgs represents ('data', 'greetMsg')
                                    // ...innerArgs = ['data', 'greetMsg'] 
        return callback.apply(context, args.concat(innerArgs));
    }
}

function showPersonDetails(city, country) {
    console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const person3 = {
    firstName: 'Ashwani',
    lastName: 'Kumar'
};

let fn = showPersonDetails.myBind(person3, "Bombay", "India");

fn();













