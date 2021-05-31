/*
N-ary Tree Level Order Traversal

Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
*/

// Use BFS to perform level-order traversal
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let queueLen = queue.length;
    let nodeVals = [];
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift();
      nodeVals.push(node.val);
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    res.push(nodeVals);
  }
  return res;
  // T.C: O(N), we visit all nodes
  // S.C: O(N), the bottom level can contain at most N / 2 nodes and therefore so can `queue`
};
