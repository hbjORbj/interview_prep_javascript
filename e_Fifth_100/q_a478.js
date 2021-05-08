/*
Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
*/

var isSubtree = function (root, subRoot) {
  if (!root) {
    return false;
  }
  return dfsTraversal(root, subRoot);
  // Time Complexity: O(m*n), m = size of s and n = size of t | isEqual() which has a time complexity of O(n) can be called for every node in s so the total time complexity is O(m*n)
  // Space Complexity: O(m), call stack can go as deep as m (which will be greater than or equal to n)
};

const dfsTraversal = (root, target) => {
  if (!root) {
    return;
  }
  if (root.val === target.val) {
    let isEqual = isEqualTree(root, target);
    if (isEqual) {
      // we shouldn't simply return isEqual because
      // there might be multiple nodes with the same value as target's
      // and if the first one fails to match, this will return false
      return true;
    }
  }
  if (dfsTraversal(root.left, target) || dfsTraversal(root.right, target)) {
    return true;
  }
  return false;
};

const isEqualTree = (root1, root2) => {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }
  return (
    root1.val === root2.val &&
    isEqualTree(root1.left, root2.left) &&
    isEqualTree(root1.right, root2.right)
  );
};
