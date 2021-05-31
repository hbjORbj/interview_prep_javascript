/*
House Robber

You are a professional robber planning to rob houses along a street. 

Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them 

is that adjacent houses have security systems connected and it will automatically contact the police 

if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,

return the maximum amount of money you can rob tonight without alerting the police.
*/

/*
At each house, we can choose to either rob or skip
If we choose to rob, we can't rob the next house
If we choose to skip, we can rob the next house

dp[i] is the maximum amount of money we can rob without alerting the police at house i
dp[i] = max(dp[i-2] + nums[i], dp[i-1])
*/
var rob = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
  // T.C: O(N)
  // S.C: O(N)
};
