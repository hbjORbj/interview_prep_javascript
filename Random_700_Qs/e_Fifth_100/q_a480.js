/*
Longest Univalue Path

Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value.

This path may or may not pass through the root.

The length of the path between two nodes is represented by the number of edges between them.
*/

// Use DFS to traverse all nodes and at each node we get the longest univalue path of left subtree and right subtree and keep track of the longest path
var longestUnivaluePath = function (root) {
  let longest = 0;
  getLongestUnivalPath(root);
  return longest;
  // T.C: O(N)
  // S.C: O(H)
  function getLongestUnivalPath(root) {
    if (!root) {
      return 0;
    }
    let leftUnivalPathLen = getLongestUnivalPath(root.left);
    let rightUnivalPathLen = getLongestUnivalPath(root.right);
    if (!root.left || root.left.val !== root.val) {
      leftUnivalPathLen = 0;
    }
    if (!root.right || root.right.val !== root.val) {
      rightUnivalPathLen = 0;
    }
    longest = Math.max(longest, leftUnivalPathLen + rightUnivalPathLen);
    return Math.max(leftUnivalPathLen, rightUnivalPathLen) + 1;
  }
};
