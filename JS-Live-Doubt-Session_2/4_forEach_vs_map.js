/***
 *  forEach() vs map()
 * 
 */

const arr = [1,2,3];

// const doubled = arr.map((item)=>{
//     return item * 2;
// })
// console.log(arr);
// console.log(doubled);

const doubled = [];
arr.forEach((item)=>{
    doubled.push(item * 2);
});
console.log(arr);
console.log(doubled);

