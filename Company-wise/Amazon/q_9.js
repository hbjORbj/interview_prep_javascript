/*
Construct Binary Search Tree from Preorder Traversal

Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.

It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.

A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.

A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.
*/

var bstFromPreorder = function (preorder) {
  if (preorder === null || preorder.length === 0) {
    return null;
  }
  return buildBST(preorder, 0, preorder.length - 1);
  // T.C: O(N)
  // S.C: O(H)
};

function buildBST(preorder, start, end) {
  if (start > end) {
    return null;
  }
  let root = new TreeNode(preorder[start]);
  let pivot = -1;
  for (let i = start + 1; i <= end; i++) {
    if (root.val < preorder[i]) {
      pivot = i - 1;
      break;
    }
    if (i === end) {
      // couldn't find a greater value
      pivot = end;
    }
  }
  if (pivot !== -1) {
    root.left = buildBST(preorder, start + 1, pivot);
    root.right = buildBST(preorder, pivot + 1, end);
  }
  return root;
}
