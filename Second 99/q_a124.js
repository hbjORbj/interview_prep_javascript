/*
Write a function that, given array A consisting of N integers, returns the biggest value X, which occurs in A exactly X
times. If there is no such value, the function should return 0.

Qs:
1. Negative integers are impossible then, right?
- Yes.
*/

function numberOccurringXTimes(A) {
    let m = new Map();
    for (let num of A) {
        m.set(num, m.get(num)+1 || 1);
    }
    let max = 0;
    for (let [num, freq] of m) {
        if (num == freq && num > max) {
            max = num;
        } 
    }
    return max;
}
// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(numberOccurringXTimes([]))
console.log(numberOccurringXTimes([3,5,1,0]))
console.log(numberOccurringXTimes([3,5,1,0,3,3]))
console.log(numberOccurringXTimes([3,3,3,5,1,0,5,5,5,5]))
