/*
Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.

(i.e., from left to right, then right to left for the next level and alternate between).
*/

/*
Use BFS to traverse all nodes in level order.

Suppose level starts from 1.
For even levels, we need to reverse the array of nodes.
*/
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let res = [],
    queue = [];
  let level = 1;
  queue.push(root);
  while (queue.length > 0) {
    let queueLen = queue.length;
    let vals = [];
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift();
      vals.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (level % 2 === 0) {
      vals.reverse();
    }
    res.push(vals);
    level++;
  }
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
