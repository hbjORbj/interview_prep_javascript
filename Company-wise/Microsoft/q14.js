/*
Jump Game II

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.
*/

var jump = function (nums) {
  // dp[i] is the minimum number of jumps to reach the end of array from i
  // one exception is that if dp[i] is Infinity, we can't reach the end of
  // array from i
  let dp = new Array(nums.length);
  dp[dp.length - 1] = 0;
  for (let i = dp.length - 2; i >= 0; i--) {
    let jumps = nums[i];
    let min = Infinity;
    for (let j = 1; j <= jumps; j++) {
      if (i + j >= dp.length) break;
      min = Math.min(1 + dp[i + j], min);
    }
    dp[i] = min;
  }
  return dp[0];
  // T.C: O(N^2)
  // S.C: O(N)
};

// Greedy
var jump = function (nums) {
  if (nums.length <= 1) {
    return 0;
  }
  if (nums[0] >= nums.length - 1) {
    return 1;
  }
  let farthest = nums[0];
  let curJumpEnd = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    let jumps = nums[i];
    farthest = Math.max(farthest, i + jumps);
    if (i === curJumpEnd) {
      count++;
      curJumpEnd = farthest;
    }
    if (curJumpEnd >= nums.length - 1) break;
  }
  return count;
  // T.C: O(N)
  // S.C: O(1)
};
