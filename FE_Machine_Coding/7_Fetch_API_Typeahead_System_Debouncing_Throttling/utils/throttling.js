export const throttle = (fn, delay) => {
    let lastExecutionTime = 0;
    return function(...args){
        const currentTime = Date.now();

        if (currentTime - lastExecutionTime >= delay) {
            fn.apply(this, args);
            lastExecutionTime = currentTime;
        }
    }
}