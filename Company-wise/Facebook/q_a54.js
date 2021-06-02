/*
Closest Binary Search Tree Value

Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.
*/

var closestValue = function (root, target) {
  if (root === null || target === null) {
    return null;
  }
  let minDiff = null,
    resVal = root.val;
  dfs(root);
  return resVal;
  function dfs(root) {
    if (!root) {
      return;
    }
    let diff = Math.abs(root.val - target);
    if (minDiff === null || diff < minDiff) {
      minDiff = diff;
      resVal = root.val;
    }
    if (root.val > target) {
      dfs(root.left);
    } else {
      dfs(root.right);
    }
  }
  // T.C: O(log(N))
  // S.C: O(H)
};
