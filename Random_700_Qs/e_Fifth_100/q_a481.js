/*
Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
*/

// Use DFS to traverse all nodes and at each node get the height of left subtree and
// right subtree and keep track of the longest path
// Longest Path of a binary tree: height of left subtree + height of right subtree
// Height of a tree: max(height of left subtree, height of right subtree) + 1
var diameterOfBinaryTree = function (root) {
  let longestPath = 0;
  getHeight(root);
  return longestPath;
  // T.C: O(N)
  // S.C: O(H)

  function getHeight(root) {
    if (!root) {
      return 0;
    }
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    let pathLen = leftHeight + rightHeight;
    longestPath = Math.max(longestPath, pathLen);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};
