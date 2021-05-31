/*
Find Largest Value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
*/

/*
1. Use BFS to traverse nodes in level-order.
2. For each level, keep track of the maximum value and push it to the result array.
3. Return the result array.
*/
var largestValues = function (root) {
  // If given root is null, return an empty array
  if (!root) {
    return [];
  }
  // result array
  let res = [];
  // queue stores nodes to be traversed
  let queue = [];
  // the first node to be traversed is the root
  queue.push(root);

  // while there are nodes to be traversed
  while (queue.length > 0) {
    // number of nodes in one level
    let queueLen = queue.length;
    let max = -Infinity;
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      // push nodes in next level into queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(max);
  }
  return res;
  // T.C: O(N), we traverse every node once
  // S.C: O(N), the bottom level can contain at most N/2 nodes, and hence so can queue
};
