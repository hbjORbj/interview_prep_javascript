/*
Count the number of prime numbers less than a non-negative number, n.
*/

var countPrimes = function (n) {
    let primes = [];
    for (let i = 0; i < n; i++) primes[i] = true;
    primes[0] = false, primes[1] = false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (primes[i] == true) {
            for (let j = i**2; j < n; j += i) {
                primes[j] = false;
            }
        }
    }
    return primes.map((bool, idx) => bool ? idx : 0)
            .filter(val => val > 0).length;
};

// Time Complexity: O(n)
// Space Complexity: O(n)