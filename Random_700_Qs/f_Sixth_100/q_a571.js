/*
N-ary Tree Level Order Traversal

Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
*/

/*
Use BFS to traverse nodes in level order

Create a queue and push the root to queue.

Get the length of queue, which represents the number of nodes in one level.

For the length of queue, pop element from queue, record this node's value and push their children to queue.

Repeat until queue length is empty (meaning there are no more nodes to traverse)
*/
var levelOrder = function (root) {
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
      for (let j = 0; j < node.children.length; j++) {
        queue.push(node.children[j]);
      }
    }
    res.push(nodes);
  }
  return res;
  // T.C: O(N)
  // S.C: O(N), the bottom level can contain at most N / 2 nodes and hence so does queue
};
