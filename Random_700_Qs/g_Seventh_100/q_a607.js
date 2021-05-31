/*
Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

/*
Use DFS to traverse all nodes.
At each node, we check if it is a valid BST tree.
For a tree to be a valid BST, its left subtree and right subtree must be valid BSTs and
its node value should be less than some value and greater than some value. These 'some' values are updated at every node and passed to the next node.
*/
var isValidBST = function (root) {
  return isValidBSTHelper(root, -Infinity, Infinity);
  // T.C: O(N)
  // S.C: O(H)
};

const isValidBSTHelper = (root, low, high) => {
  if (!root) {
    return true;
  }
  return (
    root.val > low &&
    root.val < high &&
    isValidBSTHelper(root.left, low, root.val) &&
    isValidBSTHelper(root.right, root.val, high)
  );
};
