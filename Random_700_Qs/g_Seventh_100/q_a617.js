/*
Ones and Zeroes

You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.
*/

// Recursion
var findMaxForm = function (strs, m, n) {
  return dfs(m, n);
  // T.C: O(L*M*N)
  // S.C: O(L*M*N)
  function dfs(m, n, idx = 0, memo = new Map()) {
    if (idx === strs.length) {
      return 0;
    }
    if (memo.has(`${m}-${n}-${idx}`)) {
      return memo.get(`${m}-${n}-${idx}`);
    }
    let [zeroes, ones] = getCount(str);
    let res = Math.max(
      m - zeroes >= 0 && n - ones >= 0
        ? 1 + dfs(m - zeroes, n - ones, idx + 1, memo)
        : 0,
      dfs(m, n, idx + 1, memo)
    );
    memo.set(`${m}-${n}-${idx}`, res);
    return res;
  }
};

// DP 0/1 Knapsack problem
var findMaxForm = function (strs, m, n) {
  // dp[i][j] is the size of the largest subset such that there are at most i zeroes
  // and j ones
  // dp[i][j] = Math.max(dp[i][j], dp[i-x][j-y] + 1) where x is the # of zeroes and
  // y is the # of ones in current string
  // We iterate through every string and fill the dp table
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let str of strs) {
    let [zeroes, ones] = getCount(str);
    // We are traversing from the back because otherwise we may include the same string
    // more than once
    for (let i = dp.length - 1; i >= 0; i--) {
      for (let j = dp[i].length - 1; j >= 0; j--) {
        dp[i][j] = Math.max(
          dp[i][j],
          i - zeroes >= 0 && j - ones >= 0 ? dp[i - zeroes][j - ones] + 1 : 0
        );
      }
    }
  }
  return dp[m][n];
  // T.C: O(L*M*N)
  // S.C: O(M*N)
};

const getCount = (str) => {
  let zeroes = 0,
    ones = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      zeroes++;
    } else if (str[i] === "1") {
      ones++;
    }
  }
  return [zeroes, ones];
};
