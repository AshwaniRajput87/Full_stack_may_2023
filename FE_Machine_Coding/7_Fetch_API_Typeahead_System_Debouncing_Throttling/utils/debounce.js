export const debounce = (fn, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => { 
            fn.apply(this, args);
        },delay)
    }
}