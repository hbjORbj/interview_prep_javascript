/*
Increasing Order Search Tree

Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree,

and every node has no left child and only one right child.
*/

var increasingBST = function (root) {
  let dummyRoot = new TreeNode();
  let cur = dummyRoot;
  dfs(root);
  return dummyRoot.right;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root) {
    if (!root) {
      return;
    }

    dfs(root.left);
    cur.right = root;
    cur = cur.right;
    cur.left = null;
    dfs(root.right);
  }
};
