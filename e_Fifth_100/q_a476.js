/*
Binary Tree Level Order Traversal II

Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values.

(i.e., from left to right, level by level from leaf to root).
*/

var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  let queue = []; // temporarily store the next nodes to visit
  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;
    let nodeValsInCurLevel = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      nodeValsInCurLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(nodeValsInCurLevel);
  }
  res.reverse();
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
