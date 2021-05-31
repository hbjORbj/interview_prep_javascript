/*
Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

/*
height of tree = Max(height of left subtree, height of right subtree) + 1

We will implement a method to get the height of tree. It recursives gets the height of left subtree and right subtree so every node is traversed. In the method, we will add a condition to check if left subtree and right subtree have a height different greater than 1. If so, the tree is not balanced and therefore we return false.
*/
var isBalanced = function (root) {
  let balanced = true;
  heightOfTree(root);
  return balanced;
  // T.C: O(N)
  // S.C: O(H)
  function heightOfTree(root) {
    if (!balanced) {
      return;
    }
    if (!root) {
      return 0;
    }
    let leftHeight = heightOfTree(root.left);
    let rightHeight = heightOfTree(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      balanced = false;
      return;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }
};
