/*
Array X is greater than array Y if the first non-matching element in both arrays has a greater value in X than in Y.

For example, X is greater here. X = [1,2,4,3,5] and Y = [1,2,3,4,5].

Write a function that, given a zero-indexed array A consisting of N integers and an integer K,
returns the largest contiguous subarray of length K from all the contiguous subarrays of length K.

1 <= K <= N <= 100
A contains N distinct, positive integers.

Ex) ( A = [1,4,3,2,5], K = 4 ) => [4,3,2,5]
*/

// Since A contains distinct integers, all we need to do is to iterate through from index 0
// to index N-K and find the greatest number.

function largestArray(A, K) {
    if (A.length == 0 || K == 0) return [];
    let max = -Infinity, maxIdx = -1;
    for (let i = 0; i <= A.length-K; i++) {
        if (A[i] > max) {
            max = A[i];
            maxIdx = i;
        }
    }
    return A.slice(maxIdx, maxIdx+K);
    // Time Complexity: O(N)
    // Space Complexity: O(1)
}

console.log(largestArray([1,4,3,2,5],4)); // => [4,3,2,5]
console.log(largestArray([1,4,3,2,5,10,20,21,8,7],5)); // => [10,20,21,8,7]
console.log(largestArray([],4)); // => []
console.log(largestArray([1,3,4,5],0)); // => []
console.log(largestArray([1,3,4,5],1)); // => [5]
console.log(largestArray([7],1)); // => [7]

