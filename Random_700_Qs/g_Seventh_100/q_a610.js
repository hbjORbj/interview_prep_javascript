/*
Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, 

return the values of the nodes you can see ordered from top to bottom.
*/

/*
Use DFS to traverse all nodes. We'll traverse nodes in preorder but prioritise right node
over left node (root - right - left). We will keep track of depth at each node. Only nodes with depth greater than global maximum depth will be pushed to result array (only these can be seen from the right side).
*/
var rightSideView = function (root) {
  let res = [];
  dfs(root, 1, res);
  return res;
  // T.C: O(N)
  // S.C: O(H)
};

// length of result array tells the maximum depth
const dfs = (root, depth, res) => {
  if (!root) {
    return;
  }
  if (depth > res.length) {
    res.push(root.val);
  }
  dfs(root.right, depth + 1, res);
  dfs(root.left, depth + 1, res);
};
