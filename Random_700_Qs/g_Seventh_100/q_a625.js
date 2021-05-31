/*
Unique Binary Search Trees

Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
*/

var numTrees = function (n) {
  return numberOfBSTs(1, n, new Map());
  // T.C: O(N^2)
  // S.C: O(N^2)
};

const numberOfBSTs = (low, high, memo) => {
  if (low > high) {
    return 1;
  }
  if (memo.has(`${low}-${high}`)) {
    return memo.get(`${low}-${high}`);
  }
  let total = 0;
  for (let i = low; i <= high; i++) {
    let left = numberOfBSTs(low, i - 1, memo);
    let right = numberOfBSTs(i + 1, high, memo);
    total += left * right;
  }
  memo.set(`${low}-${high}`, total);
  return total;
};
