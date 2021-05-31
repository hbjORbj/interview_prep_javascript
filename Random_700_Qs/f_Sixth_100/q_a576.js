/*
Smallest Subtree with all the Deepest Nodes

Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is tree consisting of that node, plus the set of all descendants of that node.
*/

/*
If there is one deepest leaf, that is the answer (smallest subtree with all the deepest nodes).
If there is more than one deepest leaf, we need to find the lowest common ancestor of the deepest leaves.

Use DFS to traverse nodes in postorder.

When we reach a leaf node, we check if its depth is greater than maximum depth. If so, this leaf becomes the potential result.

At other inner node, get depth of left subtree and right subtree. If they are equal and their depth is equal to maximum depth, current node is the "potential" answer. It is potential because there could be deeper node in the rest of tree.
*/
var subtreeWithAllDeepest = function (root) {
  let res = null,
    maxDepth = -1;
  dfs(root, 0);
  return res === null ? root : res;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root, depth) {
    if (!root) {
      return -1;
    }
    if (!root.left && !root.right) {
      if (depth > maxDepth) {
        maxDepth = depth;
        res = root;
      }
      return depth;
    }
    let leftDepth = dfs(root.left, depth + 1);
    let rightDepth = dfs(root.right, depth + 1);
    if (leftDepth === rightDepth && leftDepth === maxDepth) {
      res = root;
    }
    return leftDepth > rightDepth ? leftDepth : rightDepth;
  }
};
