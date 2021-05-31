/*
Path Sum

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

/*
1. Use DFS to try all possible paths.
2. Keep track of the sum of path during traversal. When leaf node is reached, check if
the sum of path equals the target. If so, return true, else continue DFS traversal to
try other paths.
*/
var hasPathSum = function (root, targetSum) {
  return dfs(root, targetSum);
  // T.C: O(N)
  // S.C: O(H)
};

const dfs = (root, target) => {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return target - root.val === 0;
  }
  return (
    dfs(root.left, target - root.val) || dfs(root.right, target - root.val)
  );
};
