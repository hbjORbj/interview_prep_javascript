/*
Binary Tree Tilt

Given the root of a binary tree, return the sum of every tree node's tilt.

The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values.

If a node does not have a left child, then the sum of the left subtree node values is treated as 0.

The rule is similar if there the node does not have a right child.
*/

/*
Use DFS to perform post-order traversal

Get the sum of left subtree, the sum of right subtree and get the tilt
Keep a global variable where we add tilts for every node
*/
var findTilt = function (root) {
  let total = 0;
  dfs(root);
  return total;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root) {
    if (!root) {
      return 0;
    }
    let leftSum = dfs(root.left);
    let rightSum = dfs(root.right);
    let tilt = Math.abs(leftSum - rightSum);
    total += tilt;

    return leftSum + rightSum + root.val;
  }
};
