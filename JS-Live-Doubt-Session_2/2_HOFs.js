/***
 *  HOFs:
 *    1. 4^2 = 16 and 4^3 = 64 -> using a custom HOF
 *        const square = powerOf(2);
 *        square(4); 16
 *        
 *        const cube = powerOf(3);
 *        cube(4); // 64
 * 
 *   2. [1,2,3,4,5] => [2,4,6,8,10] and [1,4,9,16,25]
 * 
 * 
 */

const powerOf = (exponent) => {
    return function (base) {
       return Math.pow(base, exponent);
    }
}

const square = powerOf(2);
console.log(square(4));

const cube = powerOf(3);
console.log(cube(4));

// 2. [1,2,3,4,5] => [2,4,6,8,10] and [1,4,9,16,25]


const transformArray = (arr, transformation) => {
    const transformedArr = [];   
    for(const item of arr) {
        transformedArr.push(transformation(item));
    } 

    return transformedArr;
}

const double = (num) => {
    return num * 2;
}

const squared = (num) => {
    return num * num;
}

const numbers = [1,2,3,4,5];

const doubled = transformArray(numbers, double);
console.log(doubled);

const squaring = transformArray(numbers, squared);
console.log(squaring);