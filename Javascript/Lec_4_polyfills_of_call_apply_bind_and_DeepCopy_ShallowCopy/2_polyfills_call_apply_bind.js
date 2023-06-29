/**
 *    function.call(context, arg1, arg2, ...,argN);
 *    function.apply(context, [arg1, arg2, ...,argN]);
 *    let fn = function.bind(context, arg1, arg2, ...,argN)
 *    fn(object, arguments);
 */

Function.prototype.myCall = function(context, ...args) {
    let currentContext = context || globalThis;

    let randomProp = Math.random();

    while(currentContext[randomProp] !== undefined) {
        randomProp = Math.random();
    }/*highly possibility to go infinite loop: becaue Since Math.random() 
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

    let result = currentContext[randomProp](...args);

    delete currentContext[randomProp]; /*removing the property with the dynamically generated name (randomProp) 
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













