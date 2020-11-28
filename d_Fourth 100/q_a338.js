/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n) {
    // dp[i] represents # of ways to reach i-th floor
    let dp = new Array(n+1); // size is n+1 because array is zero-indexed
    dp[0] = 1, dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

// # of ways to reach i-th floor = # of ways to reach i-1 floor + # of ways to reach i-2 floor
// base cases: 
// 1. # of ways to reach 0-th floor is 1
// 2. # of ways to reach 1-st floor is 1

