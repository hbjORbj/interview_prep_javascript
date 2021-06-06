/*
Smallest Subtree with all the Deepest Nodes

Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is tree consisting of that node, plus the set of all descendants of that node.
*/

/*
Note: if there is only one deepest leaf, the leaf itself is the LCA.

1. Traverse nodes in post-order.
2. If leaf is found and its depth is greater than max depth so far, it becomes the new LCA.
Then, we return the depth. We do so because at each inner node, we check the depth of left subtree and the depth of right
subtree. If they are equal and they are also equal to max depth, the current inner node is the LCA. We repeat this
until we traverse all nodes in the given tree and update LCA when necessary.
*/
var subtreeWithAllDeepest = function (root) {
  let lca = null;
  let maxDepth = -1;
  dfs(root, 0);
  return lca;
  function dfs(root, depth) {
    if (!root) {
      return null;
    }
    if (!root.left && !root.right) {
      if (depth > maxDepth) {
        maxDepth = depth;
        lca = root;
      }
      return depth;
    }
    let left = dfs(root.left, depth + 1);
    let right = dfs(root.right, depth + 1);
    if (left === right && left === maxDepth) {
      lca = root;
    }
    return left !== null && right !== null
      ? Math.max(left, right)
      : left || right;
  }
};
