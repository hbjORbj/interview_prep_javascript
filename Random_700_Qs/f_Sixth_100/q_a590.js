/*
Range Sum of BST

Given the root node of a binary search tree and two integers low and high, 

return the sum of values of all nodes with a value in the inclusive range [low, high].
*/

var rangeSumBST = function (root, low, high) {
  let sum = 0;
  dfs(root);
  return sum;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root) {
    if (!root) {
      return;
    }
    if (root.val < low) {
      dfs(root.right);
    } else if (root.val > high) {
      dfs(root.left);
    } else {
      sum += root.val;
      dfs(root.left);
      dfs(root.right);
    }
  }
};
