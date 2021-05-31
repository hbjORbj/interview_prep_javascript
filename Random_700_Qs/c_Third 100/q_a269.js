/*
There is a fence with n posts, each post can be painted with one of the k colors.

You have to paint all the posts such that no more than two adjacent fence posts have the same color.

Return the total number of ways you can paint the fence.

Note: n and k are non-negative integers.
*/

var numWays = function(n, k) {
    let dp = [0, k, k*k];
    if (n <= 2) return dp[n];
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) * (k-1);
    }
    return dp[n];
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

// dp[i] represents the # of ways of painting the first i posts with k colours
// There are two cases for i-th post:
// 1. It has a different color from i-1.
// Therefore, we have k-1 colours to choose from.
// 2. It has the same color as i-1.
// If i-1 and i have the same colour, i-2 must have a different color from i-1. Therefore, we again have k-1 colours to choose from for i.
// Therefore, dp[i] = dp[i-1] * (k-1) + dp[i-2] * (k-1) = (k-1) * (dp[i-1] + dp[i-2]).

/*********************************************************************************************************************/

var numWays = function(n, k) {
    if (n == 0) return 0;
    if (n == 1) return k;
    if (n == 2) return k * k;
    let prevPrev = k, prev = k * k, cur = null;
    for (let i = 3; i <= n; i++) {
        cur = (prevPrev + prev) * (k-1);
        prevPrev = prev;
        prev = cur;
    }
    return cur;
    // Time Complexity: O(n)
    // Space Complexit``y: O(1)
    // Since we only need prev and prev's prev values, we don't need to use an array.
};