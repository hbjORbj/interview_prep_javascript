/*
Maximum Size Subarray Sum Equals k

Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k.

If there isn't one, return 0 instead.
*/

var maxSubArrayLen = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let m = new Map(),
    prefixSum = 0,
    max = 0;
  m.set(prefixSum, -1);
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let diff = prefixSum - k;
    if (m.has(diff)) {
      max = Math.max(max, i - m.get(diff));
    }
    // we want the maximum length of subarray so smaller index should be kept
    if (!m.has(prefixSum)) {
      m.set(prefixSum, i);
    }
  }
  return max;
  // T.C: O(N)
  // S.C: O(N)
};
