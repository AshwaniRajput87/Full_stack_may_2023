/***
 *  HOFs: built-in -> 
 * 
 *     1. map()
 *         let arr = [1,2,3,4];
 *         arr.map((item)=> {
 *             return item * 2;
 *         });
 *         [2,4,6,8]
 *     2. filter()
 *     3. reduce()
 * 
 */

let cartItems = [
    {product: 'Laptop', price: 100000.00},
    {product: 'Tablet', price: 50000.00},
    {product: 'Mobile', price: 20000.00},
]

const fileterData = cartItems.filter((item) => {
    return item.price <= 20000.00;
});

console.log(fileterData);

const totalPrice = cartItems.reduce((accum, item) => {
    return accum + item.price;
}, 0);

console.log(totalPrice);

// polyfill of map(), filter(), reduce():

Array.prototype.myMap = function(cb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i]);
        newArr.push(res);
    }

    return newArr;
}

let cartItems1 = [
    {product: 'Laptop', price: 100000.00},
    {product: 'Tablet', price: 50000.00},
    {product: 'Mobile', price: 20000.00},
]

const data = cartItems1.myMap((item) => {
    return item.price * 2;
});

console.log(data);



