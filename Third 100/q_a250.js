/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

// Bottom-Up approach
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n));
    // dp[r][c] represents the number of possible paths from row = 0, col = 0 to row = r, col = c
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row == 0 || col == 0) { // there is only one path to any point in first row or first column since robot can only move right or down
                dp[row][col] = 1;
            } else {
                dp[row][col] = dp[row-1][col] + dp[row][col-1];
            }
        }
    }
    return dp[m-1][n-1];
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n), for dp table
};

// Top-Down approach
var uniquePaths = function(m, n) {
    let memo = new Array(m).fill(0).map(() => new Array(n));
    function possiblePaths(row, col) {
        if (memo[row][col]) return memo[row][col];
        if (row == 0 || col == 0) {
            memo[row][col] = 1;
            return 1;
        }
        let fromUp = possiblePaths(row-1, col);
        let fromLeft = possiblePaths(row, col-1);
        memo[row][col] = fromUp + fromLeft;
        return memo[row][col];
    }
    return possiblePaths(m-1, n-1);
    // Time Complexity: O(m*n), every cell in the matrix is visited
    // Space Complexity: O(m*n), for memoization table
};