let fs = require("fs");
let promise = fs.promises.readFile("./f1.txt");

/*** this is just a syntax sugar over promise consumption **/
console.log('Before');

const fn = async () => {
    try {
        let data1 = await promise;
        console.log("content " + data1);
        let data2 = await fs.promises.readFile("./f2.txt");
        console.log("content " + data2);
        let data3 = await fs.promises.readFile("./f3.txt");
        console.log("content " + data3);
        return "rVal from fn";
    } catch (err) {
        console.log("error: " + err);
    }
}

const processedData = async () => {
    let rVal = await fn();
    console.log('rVal from 25', rVal);
}
processedData();
console.log('After');