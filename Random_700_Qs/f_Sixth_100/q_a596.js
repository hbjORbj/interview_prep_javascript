/*
Maximum Depth of N-ary Tree

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
*/

/*
Use DFS to traverse all possible paths. Keep track of depth for each path.
When the end of a path (leaf node) is reached, we check if the depth is the maximum,
and if so update it to a global variable.
*/
var maxDepth = function (root) {
  let max = 0;
  dfs(root, 1);
  return max;
  function dfs(root, depth) {
    if (!root) {
      return;
    }
    if (root.children.length === 0) {
      max = Math.max(max, depth);
      return;
    }
    for (let i = 0; i < root.children.length; i++) {
      dfs(root.children[i], depth + 1);
    }
  }
  // T.C: O(N)
  // S.C: O(H)
};
