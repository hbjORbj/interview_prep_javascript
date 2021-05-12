/*
Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

/*
dp[row][col] is the number of unique paths to (row, col)
dp[row][col] = dp[row-1][col] + dp[row][col-1] because we can only move down or right
For every entry in first row or first col, there is only one unique path (base case)
We'd like to get dp[m-1][n-1]
*/
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
  // T.C: O(M*N)
  // S.C: O(M*N)
};
