/*
Insert into a Binary Search Tree

You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
*/

var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  dfs(root, val);
  return root;
  // T.C: O(log(N))
  // S.C: O(H)
};

const dfs = (root, val) => {
  if (!root) {
    return;
  }
  if (root.val > val) {
    if (root.left) {
      dfs(root.left, val);
    } else {
      root.left = new TreeNode(val);
      return;
    }
  } else if (root.val < val) {
    if (root.right) {
      dfs(root.right, val);
    } else {
      root.right = new TreeNode(val);
      return;
    }
  }
};
