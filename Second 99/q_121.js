/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Qs:
1. What to return if n is 0?
- Return an empty array.
*/

function sumZero(n) {
    if (n == 1) return [0];
    let nums = [];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        nums.push(i);
        sum += i;
    }
    nums.push(-sum);
    return nums;
}

console.log(sumZero(1));
console.log(sumZero(2));
console.log(sumZero(3));
console.log(sumZero(4));
console.log(sumZero(5));
console.log(sumZero(6));
