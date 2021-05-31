/*
Partition Equal Subset Sum

Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
*/

// First Solution
// Recursion, Memoization
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2 === 1) {
    return false;
  }
  sum /= 2;
  let memo = new Map();
  return dfs(nums, sum, 0, memo);
  // T.C: O(M*N), M = half of sum, N = number of elements
  // S.C: O(M*N)
};

/*
Using only sum as key for hash table is sufficient instead of using both sum AND index
because of the following constraint, 1 <= nums[i] <= 100, and the fact that we are simply
storing boolean values. It is still safe to use the combination of index and sum as key.
*/

/*
Returns boolean value telling if nums[`idx`...end] has a subset sum of `sum`
*/
const dfs = (nums, sum, idx, memo) => {
  if (sum === 0) {
    return true;
  }
  if (sum < 0 || idx === nums.length) {
    return false;
  }
  if (memo.has(`${idx}-${sum}`)) {
    return memo.get(`${idx}-${sum}`);
  }
  // either include current element or skip
  let res =
    dfs(nums, sum - nums[idx], idx + 1, memo) || dfs(nums, sum, idx + 1, memo);
  memo.set(`${idx}-${sum}`, res);
  return res;
};

// Second Solution

var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2 === 1) {
    return false;
  }
  sum /= 2;
  // dp[i][j] tells whether or not there is subset sum of j
  // if we have first i elements of given array
  let dp = new Array(nums.length + 1).fill(0).map(() => new Array(sum + 1));
  for (let i = 0; i < dp[0].length; i++) {
    // using zero element, it cannot be equal to any sum except 0 (taken care below)
    dp[0][i] = false;
  }
  for (let i = 0; i < dp.length; i++) {
    // using any number of element, we can always have a subset sum of 0
    dp[i][0] = true;
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      let val = nums[i - 1];
      // if j-val is out of bounds, that means current item is greater than
      // j, there is no chance of including this item and having a subset sum equal
      // to j
      dp[i][j] = dp[i - 1][j] || (j - val >= 0 ? dp[i - 1][j - val] : false);
    }
  }
  return dp[nums.length][sum];
  // T.C: O(M*N), M = half of sum, N = length of given array
  // S.C: O(M*N)
};
