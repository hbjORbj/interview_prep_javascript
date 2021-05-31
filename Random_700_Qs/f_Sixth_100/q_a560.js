/*
Largest Divisible Subset

Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.
*/

var largestDivisibleSubset = function (nums) {
  if (nums === null || nums.length === 0) {
    return [];
  }
  // We need to sort numbers in ascending order;
  // Consider [3,6,2]; without sorting, we will get 3 as result.
  // We get an incorrect result because 6 being divisible by 2 doesn't guarantee that
  // all previous elements of subset ending at 6 are divisible by 2 or vice versa
  // However, the numbers are sorted in ascending order, e.g., [2,4,8], 8 being divislbe
  // by 4 guarantees that the previous elements of subset ending at 4 also divide 8
  // In short, if a number is divisible by the maximum value of a subset, it is
  // divisible by other numbers in the subset. However, the convese isn't true.
  nums.sort((a, b) => a - b);
  let dp = new Array(nums.length);
  let prev = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    let maxLen = 1,
      prevIdx = null;
    for (let j = 0; j < i; j++) {
      if (nums[j] % nums[i] === 0 || nums[i] % nums[j] === 0) {
        if (maxLen < dp[j] + 1) {
          maxLen = dp[j] + 1;
          prevIdx = j;
        }
      }
    }
    dp[i] = maxLen;
    prev[i] = prevIdx;
  }
  let resLen = Math.max(...dp);
  let resLastIdx = null;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === resLen) {
      resLastIdx = i;
      break;
    }
  }
  let res = [];
  while (resLastIdx !== null) {
    res.push(nums[resLastIdx]);
    resLastIdx = prev[resLastIdx];
  }
  res.reverse();
  return res;
  // T.C: O(N^2)
  // S.C: O(N)
};
