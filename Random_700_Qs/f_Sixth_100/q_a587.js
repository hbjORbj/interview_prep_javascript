/*
Closest Binary Search Tree Value

Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.
*/

var closestValue = function (root, target) {
  if (root === null || target === null) {
    return null;
  }
  return dfs(root, target, root.val);
  // T.C: O(log(N))
  // S.C: O(H)
};

const dfs = (root, target, closest) => {
  if (!root) {
    return;
  }
  if (Math.abs(closest - target) > Math.abs(root.val - target)) {
    closest = root.val;
  }
  if (!root.left && !root.right) {
    return closest;
  }
  if (root.val > target) {
    let left = dfs(root.left, target, closest);
    if (left !== undefined) {
      closest = left;
    }
  } else {
    let right = dfs(root.right, target, closest);
    if (right !== undefined) {
      closest = right;
    }
  }
  return closest;
};
