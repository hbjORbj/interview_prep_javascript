/*
Range Sum of BST

Given the root node of a binary search tree,

return the sum of values of all nodes with a value in the range [low, high].

Qs:
1. Is the range inclusive?
- Yes.
*/

var rangeSumBST = function (root, low, high) {
  let sum = 0;
  dfsTraversal(root);
  return sum;
  function dfsTraversal(root) {
    if (!root) {
      return;
    }
    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }
    dfsTraversal(root.left);
    dfsTraversal(root.right);
  }
  // T.C: O(N), visit all nodes
  // S.C: O(H), call stack can go as deep as the height of tree
};

/*
Solution:
1. Perform a DFS traversal to visit all nodes.
2. At each node, check if its value falls within the range and if so add it to
a global variable `sum`.
*/
