/*
Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time.

The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n));
  // dp[row][col] represents the number of paths to (row, col) from (0, 0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
        // there is only one path to a location in first row or first column as we can only move right or down
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
  // T.C: O(M*N)
  // S.C: O(M*N)
};

var uniquePaths2 = function (m, n) {
  let memo = new Array(m).fill(0).map(() => new Array(n));
  return numberOfPaths(m - 1, n - 1, memo);
  // T.C: O(M*N)
  // S.C: O(M*N)
};

const numberOfPaths = (row, col, memo) => {
  if (row === 0 || col === 0) {
    return 1;
  }
  if (memo[row][col] !== undefined) {
    return memo[row][col];
  }
  let res =
    numberOfPaths(row - 1, col, memo) + numberOfPaths(row, col - 1, memo);
  memo[row][col] = res;
  return res;
};
