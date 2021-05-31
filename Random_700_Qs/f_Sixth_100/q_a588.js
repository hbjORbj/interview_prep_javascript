/*
Binary Tree Level Order Traversal II

Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
*/

var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let queue = [],
    res = [];
  queue.push(root);
  while (queue.length > 0) {
    let queueLen = queue.length;
    let nodes = [];
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift();
      nodes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(nodes);
  }
  res.reverse();
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
