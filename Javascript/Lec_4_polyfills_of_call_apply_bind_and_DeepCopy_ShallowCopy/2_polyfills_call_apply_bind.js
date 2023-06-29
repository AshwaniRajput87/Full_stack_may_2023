/**
 *    function.call(context, arg1, arg2, ...,argN);
 *    function.apply(context, [arg1, arg2, ...,argN]);
 *    let fn = function.bind(context, arg1, arg2, ...,argN)
 *    fn(object, arguments);
 */

Function.prototype.myCall = function(context, ...args) {
    let currentContext = context || globalThis; /** if no object will be passed or if it will be passed as null, 
    then fallback will be on globalThis which means window object. */

    let randomProp = Math.random(); // to generate a unique property and contains a unique value b/w 0 to 1

    while(currentContext[randomProp] !== undefined) {
        randomProp = Math.random();
    }/* there is highly possibility to go infinite loop: becaue Since Math.random() 
    returns a decimal number between 0 and 1, 
    the probability of generating the same number again in the next 
    iteration is high. As a result, the loop will continue indefinite.
    */

    // Will remove this logic and update with new one later.

    /**
     *  What could be the possible solutions to fix above problem? will discuss later
     *   
     */

    currentContext[randomProp] = this; 
    /*  assigning the value of this to a property in the currentContext object 
        using the dynamically generated property name randomProp.
    
        here, "this":  depending on how the function is called or 
        the context in which the code is used.*/

    let result = currentContext[randomProp](...args); /** 
     currentContext[randomProp]: this will contain what? value stored in currentContext[randomProp] is a function.
     here, I am invoking the function by passing neccessary arguments (...args).
    */

    delete currentContext[randomProp]; /* removing the property with the dynamically generated name (randomProp) 
       from the currentContext object. */

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













