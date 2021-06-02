/*
Trim a Binary Search Tree

Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high].

Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.

Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.
*/
var trimBST = function (root, low, high) {
  return trim(root, low, high);
  // T.C: O(N)
  // S.C: O(H)
};

function trim(root, low, high) {
  if (!root) {
    return null;
  }
  if (root.val < low) {
    return trim(root.right, low, high);
  }
  if (root.val > high) {
    return trim(root.left, low, high);
  }
  root.left = trim(root.left, low, high);
  root.right = trim(root.right, low, high);
  return root;
}
