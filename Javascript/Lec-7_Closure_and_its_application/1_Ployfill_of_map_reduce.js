/**
 *    Polyfill of map();
 *
 *    map() will be used over an array --> Array
 *
 */

let cartItems = [
  { product: "Laptop", price: 50000 },
  { product: "Tablet", price: 45000 },
  { product: "mobile", price: 20000 },
];

let allProducts = cartItems.map((item) => {
  return item.product;
});

console.log(allProducts);

Array.prototype.myMap = function (cb) {
  // cb having the reference of annoymous callback function
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    let res = cb(this[i]);
    newArr.push(res);
  }
  return newArr;
};

let allPrices = cartItems.myMap((item) => {
  return item.price;
});

console.log(allPrices);

/**
 * Homework: Write the polyfill of filter()
 */

/**
 * Polyfill of reduce()
 */

let arr = [1, 2, 3, 4, 5];

const sum = (acc, elem) => {
  return acc + elem;
};

const product = (acc, elem) => {
  return acc * elem;
};

let sumOfNums = arr.reduce(sum);

console.log(sumOfNums);

let productOfNums = arr.reduce(product);

console.log(productOfNums);

/**
 * Intuition of polyfill of reduce().
 *
 */

function reducer(arr, cb) {
  let acc = arr[0];

  for (let i = 1; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

// let ar = [10, 20, 30];

// console.log(reducer(ar, sum)); // 60

// console.log(reducer(ar, product)); // 6000

/**
 * final version -> polyfill of reduce()
 */

Array.prototype.myReducer = function (cb) {
  let acc = this[0];

  for (let i = 1; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
};

let ar2 = [10, 20, 30];

console.log(ar2.myReducer(sum)); // 60

console.log(ar2.myReducer(product)); // 6000

/**
 * if you provide the default value
 * console.log(ar2.myReducer(sum, 100)); // 160 -> let ar2 = [10, 20, 30];
 */

Array.prototype.myReducer = function (cb, defVal) {
  let acc = defVal !== undefined ? defVal : this[0];
  let sidx = defVal !== undefined ? 0 : 1;
  for (let i = sidx; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
};

let ar3 = [10, 20, 30];

console.log(ar3.myReducer(sum, 100)); // 160

console.log(ar3.myReducer(product, 10)); // 60000

/**
 * Flatten an array from nested array:
 *
 *  i/p: arr = [1,2,3,[4,5],[6,7,[8,9]], 10]; //
 *  o/p: [1,2,3,4,5,6,7,8,9,10]
 */

let arr3 = [1, 2, 3, [4, 5], [6, 7, [8, 9]], 10];

const res = arr3.flat(Infinity);

console.log(res);

/**
 *  polyfill of flat() array method
 *
 */

const flatten = (srcArr) => {
  let newArr = [];

  for (let i = 0; i < srcArr.length; i++) {
    let elem = srcArr[i];

    const isElemArr = Array.isArray(elem); // 1. [4,5] -> [4,5]

    if (isElemArr) {
      // need to something
      let smallFlattenArr = flatten(elem);
      newArr.push(...smallFlattenArr); // is this correct?
    } else {
      newArr.push(elem);
    }
  }

  return newArr;
};

console.log(flatten(arr3)); //[1,2,3,4,5,6,7,8,9,10]

/*
   write a logic of polyfill of flat() by passing level of nesting inside an array.

*/

/**
 *  1. simple deep clone/copy.
 *  2. deepcopy /clone with nested objects and array
 *  3. flatten an array
 *  4. Array.prototye.flat() -> HW
 *  5. flatten an object.
 */
