function resolveAfterNSeconds(delay, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, delay);
    });
}

(function () {
    let a = resolveAfterNSeconds(1000, 1) 
    a.then(async function (x) { // x = 1
        // 1sec
        let y = await resolveAfterNSeconds(2000, 2); // y = 2  // 2sec
        let z = await resolveAfterNSeconds(1000, 3); // z = 3  // 1sec
        // 4sec
        let p = resolveAfterNSeconds(2000, 4);
        let q = resolveAfterNSeconds(1000, 5);  //2sec

        p = await p;  // p = 4
        q = await q; // q = 5
        
        // Toatl time taken: 4sec + 2sec = 6sec
        console.log(x + y + z + p + q);  // output 15
    })
})();

// function fn() {
//     let john;
//     let john;
// }
// fn(); // do something like that to get an error: Uncaught SyntaxError: Identifier 'john' has already been declared