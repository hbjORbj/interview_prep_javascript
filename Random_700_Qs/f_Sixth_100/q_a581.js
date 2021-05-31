/*
Cousins in Binary Tree

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.
*/

var isCousins = function (root, x, y) {
  if (!root || x === root.val || y === root.val) {
    return false;
  }
  // Every value is unique in given tree,
  // we don't need to store the node but value is enough
  let [depthX, parentX] = dfs(root, x, 0);
  let [depthY, parentY] = dfs(root, y, 0);
  return depthX === depthY && parentX !== parentY;
  // T.C: O(N)
  // S.C: O(H)
};

const dfs = (root, target, depth) => {
  if (!root) {
    return;
  }
  if (root.left && root.left.val === target) {
    return [depth + 1, root.val];
  }
  if (root.right && root.right.val === target) {
    return [depth + 1, root.val];
  }
  return (
    dfs(root.left, target, depth + 1) || dfs(root.right, target, depth + 1)
  );
};
