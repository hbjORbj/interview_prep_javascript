/*
Search in a Binary Search Tree

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node.

If such a node does not exist, return null.
*/

var searchBST = function (root, val) {
  return dfs(root, val);
  // T.C: O(log(N))
  // S.C: O(H)
};

const dfs = (root, target) => {
  if (!root) {
    return;
  }
  if (root.val > target) {
    let left = dfs(root.left, target);
    if (left) {
      return left;
    }
  } else if (root.val < target) {
    let right = dfs(root.right, target);
    if (right) {
      return right;
    }
  } else {
    return root;
  }
  return null;
};
