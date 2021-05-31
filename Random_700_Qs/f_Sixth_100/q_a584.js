/*
Kth Smallest Element in a BST

Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
*/

/*
1. Inorder traversal of BST represents the numbers in ascending order.
2. Get the kth element in the inorder traversal.
*/
var kthSmallest = function (root, k) {
  let res = [];
  dfs(root, res);
  return res[k - 1];
  // T.C: O(N)
  // S.C: O(N)
};

const dfs = (root, res) => {
  if (!root) {
    return;
  }
  dfs(root.left, res);
  res.push(root.val);
  dfs(root.right, res);
};

/*
Follow-up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently?

How would you optimize the kthSmallest routine?
*/

var kthSmallest = function (root, k) {
  let res = null;
  dfs(root);
  return res;
  // T.C: O(H + K)
  // S.C: O(H)
  function dfs(root) {
    if (!root) {
      return;
    }
    dfs(root.left);
    if (res) {
      return;
    }
    k--; // a node is visited
    if (k === 0) {
      res = root.val;
      return;
    }
    dfs(root.right);
  }
};
