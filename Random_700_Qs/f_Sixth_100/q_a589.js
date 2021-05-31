/*
Flip Equivalent Binary Trees

For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivelent or false otherwise.
*/

/*
1. Use DFS to traverse both trees simultaneously.
2. If two trees are equivalent OR left subtree of root1 is equal to right subtree of root2 and
right subtree of root1 is equal to left subtree root2, the trees are flip equivalent. We check
this condition at every subtree.
*/
var flipEquiv = function (root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  let regular =
    root1.val === root2.val &&
    flipEquiv(root1.left, root2.left) &&
    flipEquiv(root1.right, root2.right);
  let flipped =
    root1.val === root2.val &&
    flipEquiv(root1.left, root2.right) &&
    flipEquiv(root1.right, root2.left);
  return regular || flipped;
  // T.C: O(min(N1, N2))
  // S.C: O(min(H1, H2))
};
