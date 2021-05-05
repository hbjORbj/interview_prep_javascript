/*
Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return areTwoTreesSymmetric(root.left, root.right);
  // T.C: O(N) // visit all nodes in the worst case
  // S.C: O(H) // call stack can go as deep as the height of tree
};

const areTwoTreesSymmetric = (root1, root2) => {
  if (!root1 && !root2) {
    // Reached leaf nodes
    return true;
  }
  if (!root1 || !root2) {
    // asymmetric
    return false;
  }
  return (
    root1.val === root2.val &&
    areTwoTreesSymmetric(root1.left, root2.right) &&
    areTwoTreesSymmetric(root1.right, root2.left)
  );
};
