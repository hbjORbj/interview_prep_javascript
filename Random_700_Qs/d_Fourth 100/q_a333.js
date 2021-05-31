/*
Count the number of prime numbers less than a non-negative number, n.
*/

var countPrimes = function (n) {
    let primes = new Array(n).fill(true);
    primes[0] = false, primes[1] = false;
    for (let i = 2; i < n; i++) {
        for (let j = i**2; j < n; j += i) {
            primes[j] = false;
        }
    }
    return primes.filter(bool => bool == true).length;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};
