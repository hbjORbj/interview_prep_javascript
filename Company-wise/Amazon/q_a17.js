/*
Sum of Nodes with Even-Valued Grandparent

Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.
*/

/*
First Solution: HashMap

1. Traverse nodes in preorder.
2. At each node, if it has an even value, record to hash table its depth with a value of True.
Also, at each node, check if hash table has a value of True for its current depth-2. This is basically asking "Is my grandparent even-valued?". If so, add current node's value to a global `sum` variable. When traversing current tree is done, make sure to delete the entry we added (depth, true) from hash table.
*/
var sumEvenGrandparent = function (root) {
  let sum = 0;
  let m = new Map();
  dfs(root, 0);
  return sum;
  // T.C: O(N)
  // S.C: O(N)
  function dfs(root, depth) {
    if (!root) {
      return;
    }
    if (m.get(depth - 2)) {
      sum += root.val;
    }
    if (root.val % 2 === 0) {
      m.set(depth, true);
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
    if (m.has(depth)) {
      m.set(depth, false);
    }
  }
};

// Second Solution: No HashMap
var sumEvenGrandparent = function (root) {
  let sum = 0;
  dfs(root, 1, 1);
  return sum;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root, parent, grandparent) {
    if (!root) {
      return;
    }
    if (grandparent % 2 === 0) {
      sum += root.val;
    }
    dfs(root.left, root.val, parent);
    dfs(root.right, root.val, parent);
  }
};
