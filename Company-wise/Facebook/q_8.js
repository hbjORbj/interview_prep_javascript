/*
Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.
*/

/*
In order to invert a tree, we should swap the left node and the right node for every subtree of the tree.
Hence, we will traverse the given tree in postorder and swap the left subtree and the right subtree recursively.
*/
var invertTree = function (root) {
  dfs(root);
  return root;
  function dfs(root) {
    if (!root) {
      return null;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    root.left = right;
    root.right = left;
    return root;
  }
  // T.C: O(N)
  // S.C: O(H)
};
