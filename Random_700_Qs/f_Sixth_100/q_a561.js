/*
Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

/*
A tree if symmetric if 
(1) roots of its left subtree and right subtree are the same
(2) left subtree's right subtree and right subtree's left subtree (inner subtrees) are symmetric
(3) left subtree's left subtree and right subtree's right subtree (outer subtrees) are symmetric
*/
var isSymmetric = function (root) {
  if (!root) {
    return null;
  }
  return isSymmetricHelper(root.left, root.right);
  // T.C: O(N)
  // S.C: O(H)
};

const isSymmetricHelper = (root1, root2) => {
  // if both roots are null, symmetric
  if (!root1 && !root2) {
    return true;
  }
  // if only one of the roots is null, asymmetric
  if (!root1 || !root2) {
    return false;
  }
  return (
    root1.val === root2.val &&
    isSymmetricHelper(root1.right, root2.left) &&
    isSymmetricHelper(root1.left, root2.right)
  );
};
