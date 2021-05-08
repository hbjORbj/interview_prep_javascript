/*
Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

// Perform BFS starting from the root (level 0)
// When traversing every node in one level is done, move on to next level
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let res = []; // stores values of nodes in level order
  let queue = []; // temporarily store the next nodes to visit
  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length; // number of nodes in current level
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
    res.push(nodeVals);
  }
  return res;
  // T.C: O(N), we visit every node
  // S.C: O(N), bottom level can be at most N / 2
};
