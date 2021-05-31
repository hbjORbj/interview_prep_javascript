/*
Perfect Squares

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
*/

// Recursion
// Recursively get the least number of perfect squares that sum to (n - some perfect square)
var numSquares = function (n) {
  if (Math.floor(n ** 0.5) === Math.ceil(n ** 0.5)) {
    return 1;
  }
  return dfs(n);
  // T.C: O(n)
  // S.C: O(n)
};

// Returns the least number of perfect square numbers that sum to n
const dfs = (n, memo = new Map()) => {
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return Infinity;
  }
  if (memo.has(n)) {
    return memo.get(n);
  }
  let min = Infinity;
  for (let i = 1; i <= Math.floor(n ** 0.5); i++) {
    min = Math.min(min, 1 + dfs(n - i ** 2, memo));
  }
  memo.set(n, min);
  return min;
};

// DP
// dp[i] is the least number of perfect square numbers that sum to i
var numSquares = function (n) {
  if (Math.floor(n ** 0.5) === Math.ceil(n ** 0.5)) {
    return 1;
  }
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    for (let j = 1; j <= Math.floor(i ** 0.5); j++) {
      // try every possible perfect square and get the least size of numbers
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
  // T.C: O(N)
  // S.C: O(N)
};
