/*
Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

// Perform Inorder Traversal using DFS
// If the node values of this traversal are not strictly sorted,
// the BST is invalid
// Else, the BST is valid
var isValidBST = function (root, parentVal) {
  let res = [];
  dfsTraversal(root, res);
  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] >= res[i + 1]) {
      return false;
    }
  }
  return true;
  // T.C: O(N)
  // S.C: O(N)
};

const dfsTraversal = (root, res) => {
  if (!root) {
    return;
  }
  dfsTraversal(root.left, res);
  res.push(root.val);
  dfsTraversal(root.right, res);
};
