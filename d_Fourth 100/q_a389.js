/*
Given an array of integers A, find the sum of each sliding window of size K.

ex) [1,4,2,3,5], 2 => 5, 6, 5, 8
*/

/*
Qs
1. How do you want the output?
- Store the sum of each sliding window in an array.
2. Can there be negative numbers?
- Yes.
*/

var findSumOfSizeK = function (A, K) {
  if (A == null || A.length == 0 || K <= 0) return [];
  let start = 0;
  let sum = 0,
    res = [];
  for (let end = 0; end < A.length; end++) {
    sum += A[end];
    if (end - start + 1 == K) {
      res.push(sum);
      sum -= A[start];
      start++;
    }
  }
  return res;
};

/*
Test Cases:
null, 1 -> []
[], 1 -> []
[1], 1 -> [1]
[1,2,3], 1 -> [1,2,3]
[1,4,2,3,5], 2 -> [5,6,5,8]
*/
console.log(findSumOfSizeK([1], 1));
console.log(findSumOfSizeK([1], 2));
console.log(findSumOfSizeK([1, 2, 3], 1));
console.log(findSumOfSizeK([1, 2, 3], 2));
console.log(findSumOfSizeK([1, 4, 2, 3, 5], 2));

// Time Complexity: O(N), where N is the number of elements in array,
// because we scan through the array twice at most (when K = 1)
// Space Complexity: O(N)
