/*
Count the number of prime numbers less than a non-negative number, n.
*/

var countPrimes = function (n) {
    let primes = [];
    for (let i = 0; i < n; i++) primes[i] = true;
    primes[0] = false, primes[1] = false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (primes[i] == true) {
            for (let j = i**2; j < n; j += i) { // optimisation: we start at i**2 instead of i*2
                primes[j] = false;
            }
        }
    }
    return primes.map((bool, idx) => bool ? idx : 0)
            .filter(val => val > 0).length;
};

/*
Sieve of Eratosthenes is an algorithm to find all prime numbers up to any given limit.
Here, we find all prime numbers less than n and return the count of them.
*/
// Time Complexity: O(nlog(n))
// Space Complexity: O(n)

