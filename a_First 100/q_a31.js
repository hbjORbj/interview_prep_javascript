/*
You are a professional robber planning to rob houses along a street. 

Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is
that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses
were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.

Q:
1. If the input array is empty, should I return 0?
- Yes.
2. Can the input array contain negative numbers?
- No.
*/

var rob = function(nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    let dp = new Array(nums.length);
    dp[0] = nums[0]; // dp[i] represents the maximum money that have been robbed up to i
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[dp.length-1];
};

console.log(rob([8,3,1,3,5]));
console.log(rob([]));
console.log(rob([8]));
console.log(rob([8,3]));

/*
Test Cases: 
[8,3,1,3,5] => 14
[] => 0
[8,3] => 8
[8] => 8

Time Complexity: O(n)
Space Complexity: O(n)

Category: Dynamic Programming
*/