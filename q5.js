/*
Write a program to find the nth super ugly number.
Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.
1 is a super ugly number for any given primes.
*/

function superUglyNumber(n, primes) {
    let nums = [1], indices = new Array(primes.length);
    for (let i = 0; i < indices.length; i++) indices[i] = 0;
    while (nums.length < n) {
        let next = Number.MAX_VALUE, minIndices = [];
        for (let i = 0; i < primes.length; i++) {
            let num = nums[indices[i]]*primes[i];
            if (next > num) {
                next = num;
                minIndices = [i];
            } else if (next == num) minIndices.push(i);
        }
        nums.push(next);
        minIndices.forEach(j => indices[j]++);
    }
    return nums[n-1];
}

/*
Test Cases: (5, [2,5,7]) => 7
Time Complexity: O(n)
Space Complexity: O(n)
Category: Math
*/

