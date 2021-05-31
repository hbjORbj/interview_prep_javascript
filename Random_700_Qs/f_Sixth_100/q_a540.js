/*
House Robber II

You are a professional robber planning to rob houses along a street. 

Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.

That means the first house is the neighbor of the last one.

Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police 

if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,

return the maximum amount of money you can rob tonight without alerting the police.
*/

var rob = function (nums) {
  if (nums.length <= 3) {
    return Math.max(...nums);
  }
  let money1 = robHelper(0, nums.length - 2, nums);
  let money2 = robHelper(1, nums.length - 1, nums);
  return Math.max(money1, money2);
  // T.C: O(N)
  // S.C: O(N)
};

/*
dp[i] is the max amount of money that can be robbed without alerting the police at house i

dp[i] = max(dp[i-1], dp[i-2] + nums[i]) 
because if we rob the previous house, we can't rob the current house, but, else,
we can rob the current house and still take the money robbed until the previous, previous house
*/
const robHelper = (start, end, nums) => {
  let dp = new Array(start + (end - start + 1));
  for (let i = start; i <= end; i++) {
    dp[i] = Math.max(
      dp[i - 1] ? dp[i - 1] : 0,
      (dp[i - 2] ? dp[i - 2] : 0) + nums[i]
    );
  }
  return dp[end];
};
