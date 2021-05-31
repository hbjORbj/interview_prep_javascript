/*
Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.

(i.e., from left to right, then right to left for the next level and alternate between).
*/

// Perform level-order traversal using BFS
// For every odd level, reverse the traversed node values
var zigzagLevelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let res = [];
  let queue = []; // temporarily store the next nodes to visit
  let levelIdx = 0;
  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length; // represents the number of nodes in current level
    let nodeVals = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      nodeVals.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (levelIdx % 2 === 1) {
      nodeVals.reverse();
    }
    res.push(nodeVals);
    levelIdx++;
  }
  return res;
  // T.C: O(N)
  // S.C: O(N), the bottom level can contain at most N / 2 nodes
};
