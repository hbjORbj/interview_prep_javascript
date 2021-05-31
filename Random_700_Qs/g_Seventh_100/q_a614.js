/*
Construct Binary Tree from Inorder and Postorder Traversal

Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, 

construct and return the binary tree.
*/

var buildTree = function (inorder, postorder) {
  let m = new Map();
  for (let i = 0; i < inorder.length; i++) {
    m.set(inorder[i], i);
  }
  return dfs(0, postorder.length - 1);
  function dfs(start, end) {
    if (start > end) return null;
    let root = new TreeNode(postorder.pop());
    let idx = m.get(root.val);
    root.right = dfs(idx + 1, end); // since we are traversing backwards
    root.left = dfs(start, idx - 1);
    return root;
  }
  // T.C: O(N)
  // S.C: O(N)
};
