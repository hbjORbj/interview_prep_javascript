/*
Find All The Lonely Nodes

In a binary tree, a lonely node is a node that is the only child of its parent node.

The root of the tree is not lonely because it does not have a parent node.

Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree.

Return the list in any order.
*/

/*
Use DFS to traverse all nodes
At every node, we check if it only has one child. If so, that child is a lonely node.
*/
var getLonelyNodes = function (root) {
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
  if (root.left && !root.right) {
    res.push(root.left.val);
  }
  if (!root.left && root.right) {
    res.push(root.right.val);
  }
  dfsTraversal(root.left, res);
  dfsTraversal(root.right, res);
};
