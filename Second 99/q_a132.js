/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Qs:
1. Can n be negative?
- No.
2. What to return if n is zero?
- Return an empty array. 
*/

var sumZero = function(n) {
    let res = (n % 2 == 0) ? [] : [0];
    for (let i = 1; i <= Math.floor(n/2); i++) res.push(i,-i);
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    // If n is even, we need to start from i=1 and keep pushing i and i-1 until
    // the half of n. If n is odd, we do the same except that we initialise our array
    // with zero in it so we can have a sum of zero but also have an odd number of unique
    // integers as well
};

console.log(sumZero(0)) // => []