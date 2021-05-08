/*
Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

var isValidBST = function (root, parentVal) {
  return isValidBSTHelper(root, -Infinity, Infinity);
  // T.C: O(N)
  // S.C: O(H), call stack can go as deep as the height of tree
};

const isValidBSTHelper = (root, low, high) => {
  if (!root) {
    return true;
  }
  return (
    root.val > low &&
    root.val < high &&
    isValid(root.left, low, root.val) &&
    isValid(root.right, root.val, high)
  );
};
