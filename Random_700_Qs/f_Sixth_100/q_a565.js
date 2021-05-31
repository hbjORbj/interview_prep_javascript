/*
N-ary Tree Preorder Traversal

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
*/

var preorder = function (root) {
  let res = [];
  dfsTraversal(root, res);
  return res;
  // T.C: O(N)
  // S.C: O(H)
};

const dfsTraversal = (root, res) => {
  if (!root) {
    return;
  }
  res.push(root.val);
  for (let i = 0; i < root.children.length; i++) {
    dfsTraversal(root.children[i], res);
  }
};
