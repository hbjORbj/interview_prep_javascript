/*
Univalued Binary Tree

A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.
*/

var isUnivalTree = function (root) {
  if (!root) {
    return false;
  }
  return dfsTraversal(root, root.val);
  // T.C: O(N)
  // S.C: O(H)
};

const dfsTraversal = (root, val) => {
  if (!root) {
    return;
  }
  if (root.val !== val) {
    return false;
  }
  if (
    dfsTraversal(root.left, val) === false ||
    dfsTraversal(root.right, val) === false
  ) {
    return false;
  }
  return true;
};
