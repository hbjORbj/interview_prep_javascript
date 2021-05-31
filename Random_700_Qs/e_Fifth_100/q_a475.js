/*
Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.
*/

/*
The inverse of a tree with root r and left subtree l1 and right subtree r1
is a tree with root r with an inverse of r1 as left subtree and an inverse of l1 as right subtree. 
*/
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  let invertedLeft = invertTree(root.left);
  let invertedRight = invertTree(root.right);
  root.left = invertedRight;
  root.right = invertedLeft;
  return root;
  // T.C: O(N)
  // S.C: O(H)
};
