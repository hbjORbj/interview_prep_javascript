/*
N-ary Tree Postorder Traversal

Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
*/

var postorder = function (root) {
  let res = [];
  dfs(root, res);
  return res;
  // T.C: O(N)
  // S.C: O(H)
};

const dfs = (root, res) => {
  if (!root) {
    return;
  }
  for (let i = 0; i < root.children.length; i++) {
    dfs(root.children[i], res);
  }
  res.push(root.val);
};
