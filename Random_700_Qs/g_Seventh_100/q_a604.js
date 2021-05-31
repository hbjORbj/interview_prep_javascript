/*
Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.
*/

/*
To invert a tree, we should swap the left subtree and the right subtree at every node of the
tree. We do this in a bottom-up fashion using postorder traversal.
*/
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
  // T.C: O(N)
  // S.C: O(H)
};
