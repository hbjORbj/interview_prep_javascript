/*
Maximum Depth of N-ary Tree

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
*/

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let max = 0;
  for (let i = 0; i < root.children.length; i++) {
    max = Math.max(max, maxDepth(root.children[i]));
  }
  return max + 1;
  // T.C: O(N)
  // S.C: O(H)
};
