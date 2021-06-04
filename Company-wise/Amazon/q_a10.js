/*
Populating Next Right Pointers in Each Node

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
*/

// BFS
var connect = function (root) {
  if (!root) {
    return null;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift();
      if (i < queueLen - 1) node.next = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
  // T.C: O(N)
  // S.C: O(N)
};

// DFS
function connect(root) {
  dfs(root);
  return root;
}

function dfs(root) {
  // null node or leaf node
  if (!root || (!root.left && !root.right)) {
    return;
  }
  if (root.left && root.right) {
    root.left.next = root.right;
  }
  if (root.next && root.right) {
    root.right.next = root.next.left;
  }
  dfs(root.left);
  dfs(root.right);
  // T.C: O(N)
  // S.C: O(H)
}
