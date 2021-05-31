/*
First Missing Positive

Given an unsorted integer array nums, find the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.
*/

var firstMissingPositive = function (nums) {
  // Suppose the array contains elements from 1...n where n is the length of array
  // In this case, the answer will be n+1.
  // In all cases other than this, the answer (first missing positive) will be less than or equal to n
  // we will push positive integers into its corresponding index
  // ex) 1 into 0 and 2 into 1 and n into n-1..
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let idx = nums[i] - 1;
    // positive index is already in correct index or
    // there are duplicates of this positive integer
    if (i === idx || nums[i] === nums[idx]) continue;
    if (idx >= 0 && idx < nums.length) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      i--; // check on the swapped element
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return n + 1;
  // T.C: O(N)
  // S.C: O(1)
};
