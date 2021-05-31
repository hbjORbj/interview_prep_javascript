/*
Unique Binary Search Trees

Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
*/

// Recursion, Memoization
var numTrees = function (n) {
  let memo = new Map();
  return dfs(1, n, memo);
  // T.C: O(N^2)
  // S.C: O(N)
};

const dfs = (low, high, memo) => {
  if (low > high) {
    return 1;
  }
  if (memo.has(`${low}-${high}`)) {
    return memo.get(`${low}-${high}`);
  }
  let total = 0;
  for (let i = low; i <= high; i++) {
    let leftCount = dfs(low, i - 1, memo);
    let rightCount = dfs(i + 1, high, memo);
    total += leftCount * rightCount;
  }
  memo.set(`${low}-${high}`, total);
  return total;
};

// DP
var numTrees = function (n) {
  // dp[i] is the number of unique BSTs using i unique nodes
  let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      count += dp[j - 1] * dp[i - j];
    }
    dp[i] = count;
  }
  return dp[n];
  // T.C: O(N^2)
  // S.C: O(N)
};
