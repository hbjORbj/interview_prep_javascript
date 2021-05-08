/*
Insert into a Binary Search Tree

You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
*/

var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  dfsTraversal(null, root, val);
  return root;
  // T.C: O(log(N))
  // S.C: O(H)
};

const dfsTraversal = (parent, root, val) => {
  if (!root) {
    if (parent.val > val) {
      parent.left = new TreeNode(val);
    } else {
      parent.right = new TreeNode(val);
    }
    return;
  }
  if (root.val > val) {
    dfsTraversal(root, root.left, val);
  } else {
    dfsTraversal(root, root.right, val);
  }
};
