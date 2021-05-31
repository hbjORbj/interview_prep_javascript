/*
Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

/*
Use DFS to try all possible paths. For each path, keep track of depth.
When end of path is reached, update the global variable if the depth is the maximum.
*/
var maxDepth = function (root) {
  let max = 0;
  dfs(root, 1);
  return max;
  function dfs(root, depth) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      max = Math.max(max, depth);
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  }
  // T.C: O(N)
  // S.C: O(H)
};
