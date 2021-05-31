/*
Longest Increasing Subsequence

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
*/

var lengthOfLIS = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let dp = new Array(nums.length); // dp[i] is the length of longest increasing subsequence "ending" at index i
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    let maxLen = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        maxLen = Math.max(maxLen, dp[j] + 1);
      }
    }
    dp[i] = maxLen;
  }
  return Math.max(...dp);
  // T.C: O(N^2)
  // S.C: O(N)
};
