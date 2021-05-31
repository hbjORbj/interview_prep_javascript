/*
N-ary Tree Postorder Traversal

Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal.

Each group of children is separated by the null value (See examples)
*/

var postorder = function (root) {
  let values = [];
  dfsTraversal(root, values);
  return values;
  // T.C: O(N)
  // S.C: O(H)
};

const dfsTraversal = (root, values) => {
  if (!root) {
    return;
  }
  for (let i = 0; i < root.children.length; i++) {
    dfsTraversal(root.children[i], values);
  }
  values.push(root.val);
};
