/*
Minimum Distance Between BST Nodes

Given the root of a Binary Search Tree (BST),

return the minimum difference between the values of any two different nodes in the tree.
*/

// First Solution
// O(N) Space
var minDiffInBST = function (root) {
  let values = [];
  inorder(root, values);
  let minDiff = Infinity;
  for (let i = 0; i < values.length - 1; i++) {
    minDiff = Math.min(minDiff, values[i + 1] - values[i]);
  }
  return minDiff;
  // T.C: O(N)
  // S.C: O(N)
};

function inorder(root, values) {
  if (!root) {
    return;
  }
  inorder(root.left, values);
  values.push(root.val);
  inorder(root.right, values);
}

// Second Solution
// O(H) Space
var minDiffInBST = function (root) {
  let prev = null;
  let minDiff = Infinity;
  inorder(root);
  return minDiff;
  // T.C: O(N)
  // S.C: O(H)
  function inorder(root) {
    if (!root) {
      return;
    }
    inorder(root.left);
    if (prev !== null) {
      minDiff = Math.min(minDiff, root.val - prev);
    }
    prev = root.val;
    inorder(root.right);
  }
};
