/*
Average of Levels in Binary Tree

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.

Answers within 10-5 of the actual answer will be accepted.
*/

// Use BFS to perform level-order traversal
// Keep track of the number of nodes in each level and the sum of them
var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let numOfNodes = queue.length;
    let nodeValsSum = 0;
    for (let i = 0; i < numOfNodes; i++) {
      let node = queue.shift();
      nodeValsSum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(nodeValsSum / numOfNodes).toFixed(5);
  }
  return res;
  // T.C: O(N), we visit all nodes
  // S.C: O(N), the bottom level can contain at most N / 2 nodes
};
