/*
Sum of Root To Leaf Binary Numbers

You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.
*/

/*
Use DFS to find every possible path
Keep track of binary number in path. When leaf is reached, convert it to an integer and add it
to a global variable.
*/
var sumRootToLeaf = function (root) {
  let sum = 0;
  dfs(root, "");
  return sum;
  function dfs(root, path) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      sum += parseInt(path + root.val, 2);
      return;
    }
    dfs(root.left, path + root.val);
    dfs(root.right, path + root.val);
  }
  // T.C: O(N)
  // S.C: O(H)
};
