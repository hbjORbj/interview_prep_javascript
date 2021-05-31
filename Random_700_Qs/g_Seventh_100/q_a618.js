/*
Target Sum

You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.
*/

// Recursion, Memoization
var findTargetSumWays = function (nums, target) {
  return dfs(nums, target);
  // T.C: O(T*N)
  // S.C: O(T*N)
};

const dfs = (nums, remains, memo = new Map(), idx = 0) => {
  if (idx === nums.length) {
    return remains === 0 ? 1 : 0;
  }
  if (memo.has(`${idx}-${remains}`)) {
    return memo.get(`${idx}-${remains}`);
  }
  let res =
    dfs(nums, remains - nums[idx], memo, idx + 1) +
    dfs(nums, remains + nums[idx], memo, idx + 1);
  memo.set(`${idx}-${remains}`, res);
  return res;
};

// DP 0/1 Knapsack problem
var findTargetSumWays = function (nums, target) {
  // Imagine we keep two subsets: one consisting of only potential positives,
  // the other consisting of potential negatives.
  // We are looking for such S1 and S2 so that S1 - S2 = target
  // S1 - (Sum - S1) = target
  // 2S1 = Sum + target
  // S1 = (Sum + target) / 2
  let sum = nums.reduce((acc, cur) => acc + cur);
  if ((target + sum) % 2 === 1 || target > sum) {
    return 0;
  }

  // Count subsets of sum S1
  let S1 = (sum + target) / 2;
  let zeroes = getZeroes(nums);
  let dp = new Array(nums.length + 1)
    .fill(0)
    .map(() => new Array(S1 + 1).fill(0));
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = 0;
  }
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      let num = nums[i - 1];
      if (num > j || num === 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - num];
      }
    }
  }
  return 2 ** zeroes * dp[nums.length][S1];
  // T.C: O(S*N), S = sum of nums, N = # of nums
  // S.C: O(S*N)
};

const getZeroes = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count++;
  }
  return count;
};
