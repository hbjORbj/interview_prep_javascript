/*
Binary Tree Vertical Order Traversal

Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.
*/
var verticalOrder = function (root) {
  if (!root) return [];
  // given constraint: the number of nodes in the tree is 100 at maximum
  let arr = new Array(200);
  let queue = [];
  queue.push({ node: root, col: 100 });
  while (queue.length > 0) {
    let { node, col } = queue.shift();
    if (arr[col]) {
      arr[col].push(node.val);
    } else {
      arr[col] = [node.val];
    }
    if (node.left) queue.push({ node: node.left, col: col - 1 });
    if (node.right) queue.push({ node: node.right, col: col + 1 });
  }
  return arr.filter((x) => x !== undefined);
  // T.C: O(N)
  // S.C: O(N)
};

// What if we don't know the maximum number of possible nodes?
// Same Idea but we need to do sorting in this case
var verticalOrder = function (root) {
  if (!root) return [];
  let queue = [];
  let m = new Map();
  queue.push({ node: root, col: 0 });
  while (queue.length > 0) {
    let { node, col } = queue.shift();
    if (m.has(col)) m.get(col).push(node.val);
    else m.set(col, [node.val]);
    if (node.left) queue.push({ node: node.left, col: col - 1 });
    if (node.right) queue.push({ node: node.right, col: col + 1 });
  }
  m = Array.from(m.entries());
  m.sort((a, b) => a[0] - b[0]);
  return m.map((x) => x[1]);
  // T.C: O(Nlog(N))
  // S.C: O(N)
};
