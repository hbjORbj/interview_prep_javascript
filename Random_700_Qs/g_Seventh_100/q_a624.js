/*
Integer Break

Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.
*/

var integerBreak = function (n) {
  if (n < 2) {
    return -1;
  }
  return dfs(n, new Map());
  // T.C: O(N^2)
  // S.C: O(N^2)
};

// returns the possible maximum product
const dfs = (n, memo) => {
  if (n === 1) {
    return 1;
  }
  if (memo.has(n)) {
    return memo.get(n);
  }
  let max = 0;
  for (let i = 1; i < n; i++) {
    max = Math.max(max, i * Math.max(n - i, dfs(n - i, memo)));
  }
  memo.set(n, max);
  return max;
};
