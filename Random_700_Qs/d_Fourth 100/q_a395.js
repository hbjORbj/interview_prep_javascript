/*
Given an array of positive integers, find a subarray that sums to a given number X.

Qs.
1. What to return if array is null or empty?
- Return an empty array.
2. What to do if there are multiple subarrays?
- Return any one.
*/

// HashMap which tracks of cumulative sum at each index
var subArraySum = function (arr, X) {
  if (arr == null || arr.length == 0) return [];
  let m = new Map();
  let sum = 0;
  m.set(sum, -1); // in case of subarray[0...i]
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let complement = sum - X;
    if (m.has(complement)) {
      return [m.get(complement) + 1, i];
    } else {
      m.set(sum, i);
    }
  }
  return [];
  // Time Complexity: O(N)
  // Space Complexity: O(N)
};

console.log(subArraySum([1, 2, 3, 5, 2], 8));
console.log(subArraySum([1, 2, 3, 5, 2], 1));
console.log(subArraySum([1, 2, 3, 5, 2], 7));
console.log(subArraySum([1, 2, 3, 5, 2], 0));

// Sliding Window
var subArraySum2 = function (arr, X) {
  if (arr == null || arr.length == 0) return [];
  let start = 0,
    sum = 0;
  for (let end = 0; end < arr.length; end++) {
    // Expand window
    sum += arr[end];

    // Validate window (make sure window's sum is less than or equal to X)
    while (sum > X && start < end) {
      sum -= arr[start];
      start++;
    }

    // Check if we've found the subarray
    if (sum == X) {
      return [start, end];
    }
  }
  return [];
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};

console.log(subArraySum2([1, 2, 3, 5, 2], 8));
console.log(subArraySum2([1, 2, 3, 5, 2], 1));
console.log(subArraySum2([1, 2, 3, 5, 2], 7));
console.log(subArraySum2([1, 2, 3, 5, 2], 0));
