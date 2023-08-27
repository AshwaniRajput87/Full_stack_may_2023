/***
 *  sum(1)(2)(3)();
 *  sum(1)(3)();
 *  sum(1)(3)(4)(5)();
 *  
 *   currying function -> concept of closure and recursion
 */

//sum(1)(2)(3)(4)(5)();

const sum = (a) => {
    return (b) => {
        if(b) {
            return sum(a+b);
        } else {
            return a;
        }
    }
}

console.log(sum(2)(3)());
console.log(sum(2)(3)(5)());
console.log(sum(2)());

