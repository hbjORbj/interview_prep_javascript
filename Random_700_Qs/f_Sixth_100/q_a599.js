/*
Lowest Common Ancestor of Deepest Leaves

Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:

The node of a binary tree is a leaf if and only if it has no children
The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.
*/

var lcaDeepestLeaves = function (root) {
  let maxDepth = -1;
  let lca = null;
  dfs(root, 0);
  return lca;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root, depth) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      if (depth > maxDepth) {
        maxDepth = depth;
        lca = root;
      }
      return depth;
    }
    let leftDepth = dfs(root.left, depth + 1);
    let rightDepth = dfs(root.right, depth + 1);
    if (leftDepth === maxDepth && leftDepth === rightDepth) {
      lca = root;
    }
    return Math.max(leftDepth ? leftDepth : -1, rightDepth ? rightDepth : -1);
  }
};
