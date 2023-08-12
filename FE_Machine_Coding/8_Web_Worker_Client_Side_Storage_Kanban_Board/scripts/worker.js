self.onmessage = function (event) {

    const limit = event.data;

    const primes = calculatePrimes(limit);

    self.postMessage(primes);
    
}

const calculatePrimes = (limit) => {
    const primes = [];

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

const isPrime = (num) => {
    if (num <= 1) return false;

    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    // i*i = num
    // i=num^1/2,  i^2
    // 6k-1 eg: 6*1-1 = 5
    // 6k+1 eg: 6*1+1 = 7

    for (let i = 5; i * i <= num; i += 6) {
        if((num % i === 0) || (num % (i+2) === 0)) return false 
    }

    return true;
}