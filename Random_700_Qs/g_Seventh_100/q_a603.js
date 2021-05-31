/*
All Nodes Distance K in Binary Tree

We are given a binary tree (with root node root), a target node, and an integer value k.

Return a list of the values of all nodes that have a distance k from the target node.

The answer can be returned in any order.
*/

/*
Use DFS to traverse the given tree and find the target node.

Starting at this target node, we use BFS to collect all nodes at depth k.
We need a way of accessing the parent node so we use Hash Table to record parent node
for every node.
*/
var distanceK = function (root, target, k) {
  let parents = new Map(),
    visiting = new Map();
  let targetNode = null;
  dfs(root, null);
  let queue = [],
    depth = 0;
  queue.push(targetNode);
  while (queue.length > 0) {
    let queueLen = queue.length;
    let vals = [];
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift();
      vals.push(node.val);
      visiting.set(node, true);
      if (node.left && !visiting.get(node.left)) {
        queue.push(node.left);
      }
      if (node.right && !visiting.get(node.right)) {
        queue.push(node.right);
      }
      let parent = parents.get(node);
      if (parent && !visiting.get(parent)) {
        // parent node
        queue.push(parent);
      }
    }
    if (depth === k) {
      return vals;
    }
    depth++;
  }
  return []; // there is no node k distant from target node

  function dfs(root, parent) {
    if (!root) {
      return;
    }
    if (root.val === target.val) {
      targetNode = root;
    }
    parents.set(root, parent);
    visiting.set(root, false);
    dfs(root.left, root);
    dfs(root.right, root);
  }
  // T.C: O(N)
  // S.C: O(N)
};
