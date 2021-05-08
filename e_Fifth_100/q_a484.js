/*
Search in a Binary Search Tree

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node.

If such a node does not exist, return null.
*/

var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else if (root.val < val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
  // T.C: O(log(N))
  // S.C: O(H)
};
