/*
Count Good Nodes in Binary Tree

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.
*/

/*
Use DFS to traverse all nodes. We keep track of maximum node value in path at every node
throughout traversal. Therefore, if current node's value is greater than or equal to the
maximum value, current node is a good node.
*/
var goodNodes = function (root) {
  let count = 0;
  dfs(root, -Infinity);
  return count;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root, max) {
    if (!root) {
      return;
    }
    if (root.val >= max) {
      count += 1;
    }
    max = Math.max(max, root.val);
    dfs(root.left, max);
    dfs(root.right, max);
  }
};
