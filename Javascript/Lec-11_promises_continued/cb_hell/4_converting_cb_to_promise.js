/**
 * converting cbs to promises -> Promisify
 */

const fs = require('fs');

const promiseReadFile = (filePath) => {
    return new Promise((resolve, reject)=> {
       fs.readFile(filePath, (err, data)=>{
          if(err) {
              reject(err);
          } else {
              resolve(data);
          }
       });
    });
}

/****consuming promises here *******/
console.log('Before');

const promise = promiseReadFile('./f1.txt');

promise.then((data)=>{
     console.log('Content inside the file: ' + data);
}).catch((err)=> {
    console.log(err);
}).finally(()=>{
    console.log('Read content inside the file successfully!');
});

console.log('After');
