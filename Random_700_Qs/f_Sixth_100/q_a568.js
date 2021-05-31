/*
Binary Tree Postorder Traversal

Given the root of a binary tree, return the postorder traversal of its nodes' values.
*/

var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  dfsTraversal(root, res);
  return res;
  // T.C: O(N)
  // S.C: O(H)
};

const dfsTraversal = (root, res) => {
  if (!root) {
    return;
  }
  dfsTraversal(root.left, res);
  dfsTraversal(root.right, res);
  res.push(root.val);
};
