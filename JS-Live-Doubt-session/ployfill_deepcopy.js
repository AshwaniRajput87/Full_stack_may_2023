/***
 *  Shallow copy:
 * 
 */

let person = {
    name: {
        firstname: 'Ashwani',
        middlename: 'Kumar',
        lastname: 'Rajput'
    },
    designation: 'Engineering Manger'
};

//let person1 = { ...person }; // here call-by-reference -> both the objects sharing the same address 

let person1 = JSON.parse(JSON.stringify(person));

person1.name.lastname = 'Sharma'

console.log(person);

console.log(person1);

// to solve problem -> use shallow copy 

// 1. spread operator
// 2. Object.assign(src, dest)
// 3. Object.create(obj)

// there is problem in shallow copy for nested objects -> use the deep copy

// Deep copy -> create the complete and independent copy of an object or array which won't affet the nesetd objects

// using JSON.parse(JSON.stringify(obj));

/**
 * ployfill of deep copy:
 * 
 *   algo:
 *     1. need a object/nested object.
 *     2. Assign old obj to new obj variable
 *     3. check the old object is an object or not.
 *     4. if yes, then check it's an of object or an object only,
 *        then assign in the new object variable.
 * 
 */

const obj = [
    { name: 'Ashwani', id: 1 },
    { name: 'Amit', id: 2 },
    {name: 'Gaurav', id:3}
    
]

function deepCopy(obj) {

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

let person2 = {
    name: {
        firstname: 'Ashwani',
        middlename: 'Kumar',
        lastname: 'Rajput'
    },
    designation: 'Engineering Manger'
};

let person3 = deepCopy(person2);

person3.name.firstname = 'Himanshu';

console.log(person2);
console.log(person3);





