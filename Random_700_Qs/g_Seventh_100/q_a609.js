/*
Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
*/

/*
Diameter = height of left subtree + height of right subtree
height = max(height of left subtree, height of right subtree) + 1

Use DFS to traverse all nodes. At every node, find the diameter of the tree.
Keep track of the maximum diameter using a global variable.

We will traverse nodes in postorder because we need height of subtrees at each node.
*/

var diameterOfBinaryTree = function (root) {
  let max = 0;
  dfs(root);
  return max;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root) {
    if (!root) {
      return 0;
    }
    let leftHeight = dfs(root.left);
    let rightHeight = dfs(root.right);
    max = Math.max(max, leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};
