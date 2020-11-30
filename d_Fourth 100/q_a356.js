/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

var uniquePaths = function(m, n) {
    // dp[i][j] is the # of unique paths to (i, j)
    // dp[i][j] = dp[i-1][j] + dp[i][j-1] since robot can only come from up or left
    let dp = new Array(m).fill(0).map(() => new Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) { // there is only one path to position at first row or first column
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n)
};