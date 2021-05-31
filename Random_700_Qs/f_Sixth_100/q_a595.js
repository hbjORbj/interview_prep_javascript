/*
Average of Levels in Binary Tree

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.

Answers within 10-5 of the actual answer will be accepted.
*/

/*
Use BFS to traverse nodes in level order
Get the sum of all nodes in a level and divide it by the number of nodes in that level
Add it to a global array
*/
var averageOfLevels = function (root) {
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let queueLen = queue.length;
    let levelSum = 0;
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift();
      levelSum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push((levelSum / queueLen).toFixed(5));
  }
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
