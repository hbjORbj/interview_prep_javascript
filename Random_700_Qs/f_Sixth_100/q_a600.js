/*
Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

/*
Use DFS to find every possible path. For every path, keep track of depth and
update the global variable for minimum depth when smaller depth is found.
*/
var minDepth = function (root) {
  let min = Infinity;
  dfs(root, 1);
  return min === Infinity ? 0 : min;
  function dfs(root, depth) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      min = Math.min(min, depth);
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  }
  // T.C: O(N)
  // S.C: O(H)
};
