/**
 *  map() and Map? -> map() is an in-build method of an array but 
 *      Map is data structure in JS to manage and store the collections of data.
 * 
 *  Map, WeakMap, Set and WeakSet
 * 
 *    - These are 4 different data structures which id used to store and manage the collections of data.
 *    - Introduced in ES6(2015)
 */

/**
 *  Map: 
 *    - allows you to store key-value pairs.
 *    - provides you ordered colection of elements/data.
 *    - keys in Map can be of any type, it could be an object or primitive.
 *    - Map provides methods to manipulate and accessing the elements efficiently.
 *       1. set(key, value)
 *       2. get(key)
 *       3. has(key)
 *       4. delete(key)
 *       5. clear()
 *       6. size()
 *       7. Keys(), values()
 */

let map = new Map();

map.set("name", 'Ashwani');
map.set('age', '36');
map.set('isJSTrainer', true);

console.log(map.has('age'));

console.log(map.get('name'));

console.log(map.size);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

/**
 *  WeakMap:
 *    - very similar to Map but with a key differences
 *        - keys in WeakMap must be objects not the primitives
 *        - doesn't expose methods to iterate over the keys or values;
 */

let weakMapData = new WeakMap();

let key1 = { id: 1 };
let key2 = { id: 2 };
let key3 = { id: 3 };

weakMapData.set(key1, 'Ashwani');
weakMapData.set(key2, 36);
weakMapData.set(key3, true);

console.log(weakMapData.get(key1));

/****
 * 
 *  Set:
 *    - allows you to store unquiue value of any type.
 *    - doesn't allow duplicate elements.
 *    - provides you in-built methods to add, delete the elements
 *    - maintains the insertion order of elements.
 */

let mySet = new Set();

mySet.add(1);
mySet.add(1);
mySet.add("hello");
mySet.add("hello1");
mySet.add(false);


console.log([...mySet]);


/****
 * 
 *  WeakSet:
 *    - similar to Set but with a key differences
 *      - can only store objcets insread of primitives
 *      - doesn't expose the methods to iterate over elements.
 */

let myWeakSet = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj2));

console.log(myWeakSet.delete(obj2));
console.log(myWeakSet);









