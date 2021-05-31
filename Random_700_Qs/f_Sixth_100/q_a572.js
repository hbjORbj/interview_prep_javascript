/*
Leaf-Similar Trees

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
*/

/*
Use DFS to traverse each tree
Record a leaf value sequence of each tree to an array
Compare the two arrays to check if they are equivalent
*/
var leafSimilar = function (root1, root2) {
  let leaves1 = [],
    leaves2 = [];
  dfs(root1, leaves1);
  dfs(root2, leaves2);
  if (leaves1.length !== leaves2.length) {
    return false;
  }
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false;
    }
  }
  return true;
  // T.C: O(M + N)
  // S.C: O(M + N)
};

const dfs = (root, res) => {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    res.push(root.val);
    return;
  }
  dfs(root.left, res);
  dfs(root.right, res);
};
