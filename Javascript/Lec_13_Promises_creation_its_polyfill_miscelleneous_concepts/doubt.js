function resolveAfterNSeconds(n, x) {
return new Promise(resolve => {
setTimeout(() => {
resolve(x);
}, n);
});
} (function () {
    let a = resolveAfterNSeconds(1000, 1) // 1 sec
    a.then(async function (x) {
        let y = await resolveAfterNSeconds(2000, 2) // 1sec + 2sec = 3secs
        let z = await resolveAfterNSeconds(1000, 3) //  3sec + 1sec = 4secs
        let p = resolveAfterNSeconds(2000, 4);// Maximum time taken to execute p and q is 2secs
        let q = resolveAfterNSeconds(1000, 5);// total time taken = 4+2 = 6 sec   
        console.log(x + y + z + await p + await q); // take 6secs   output 15
    })       // 1 + 2  + 3 + 4 + 5 = 15
})();



