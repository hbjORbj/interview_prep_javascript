/*
Binary Tree Paths

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.
*/

/*
Use DFS to try all possible paths. Keep track of path using string. Pass it to next node and
if leaf node is reached, push the path string to the result array.
*/
var binaryTreePaths = function (root) {
  let res = [];
  dfs(root, "", res);
  return res;
  // T.C: O(N)
  // S.C: O(H)
};

const dfs = (root, path, res) => {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    res.push(path + root.val);
  }
  dfs(root.left, path + root.val + "->", res);
  dfs(root.right, path + root.val + "->", res);
};
