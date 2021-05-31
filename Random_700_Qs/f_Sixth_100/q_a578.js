/*
Longest Univalue Path

Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value.

This path may or may not pass through the root.

The length of the path between two nodes is represented by the number of edges between them.
*/

/*
Longest path of a tree = height of left subtree + height of right subtree

We need an extra condition to check: is the path univalued?

So, longest univalued path of a tree = height of univalued path of left subtree +
height of univalued path of right subtree

We will use DFS to try all possible paths and find the longest univalued path at each node.
Then, we will keep track of the length of the longest univalued path using a global variable. To find the longest path, we should traverse nodes in postorder.
*/
var longestUnivaluePath = function (root) {
  if (!root) {
    return 0;
  }
  let max = 0;
  dfs(root);
  return max;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root) {
    if (!root) {
      return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (!root.left || root.left.val !== root.val) {
      left = 0;
    }
    if (!root.right || root.right.val !== root.val) {
      right = 0;
    }
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }
};
