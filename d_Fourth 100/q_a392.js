/*
Given an array of positive integers, find a subarray that sums to a given number X.

ex) input = [1,2,3,5,2] and X = 8, Result = [3,5] (indexes 2,3)
*/

/*
1. How do you want the output?
- Return the start and end indices of the subarray.
2. What to return if the array is null or empty?
- Return an empty array.
3. What to return if subarray is not found?
- Return an empty array.
4. What to do if there are multiple subarrays?
- Return any one.
*/

var subArraySum = function (arr, X) {
  if (arr == null || arr.length == 0) return [];
  let m = new Map(); // keeps track of cumulative sum at each index
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
  // Time Complexity: O(N), we scan through the array
  // Space Complexity: O(N), HashMap can be of size N at most
};

/*
1. Keep track of cumulative sum at each index.
if (sum at index j - sum at index i) equals target, [i+1...j] is a subarray whose sum is equal to target
2. Go through every index of the array and see if there are two indices whose difference is equal to target
*/

console.log(subArraySum([1, 2, 3, 5, 2], 8));
console.log(subArraySum([1, 2, 3, 5, 2], 1));
console.log(subArraySum([1, 2, 3, 5, 2], 7));
console.log(subArraySum([1, 2, 3, 5, 2], 0));

var subArraySum2 = function (arr, X) {
  if (arr == null || arr.length == 0) return [];
  let start = 0,
    sum = 0;
  for (let end = 0; end < arr.length; end++) {
    // Expand window by one
    sum += arr[end];

    // Validate window (make sure window's sum is less than or equal to target)
    while (sum > X && start < end) {
      sum -= arr[start];
      start++;
    }
    // Check if window's sum is equal to target
    if (sum == X) return [start, end];
  }
  return [];
  // Time Complexity: O(N), we scan through the array
  // Space Complexity: O(1), no extra space is used
};

/*
1. Set two pointers both to zero. One pointer is the start of window and the other is the end of window.
2. Expand the end pointer one by one, keep track of the sum of elements in the window and check the following:
    - While sum is greater than target, advance the start pointer by one while subtracting arr[start] from sum.
    - If sum is equal to target, return the start and end indices of the window.
3. Repeat step 2 until end pointer reaches the end of string
*/

console.log(subArraySum2([1, 2, 3, 5, 2], 8));
console.log(subArraySum2([1, 2, 3, 5, 2], 1));
console.log(subArraySum2([1, 2, 3, 5, 2], 7));
console.log(subArraySum2([1, 2, 3, 5, 2], 0));
