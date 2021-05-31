/*
You are a professional robber planning to rob houses along a street. 

Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them 

is that adjacent houses have security system connected and it will automatically contact the police 

if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 

determine the maximum amount of money you can rob tonight without alerting the police.
*/

var rob = function(nums) {
    if (nums.length == 0) return 0;
    // dp[i] represents the maximum amount of money robbed up to i-th house
    let dp = new Array(nums.length+1);
    dp[0] = 0, dp[1] = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(nums[i-1] + dp[i-2], dp[i-1]);
    }
    return dp[nums.length];
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};