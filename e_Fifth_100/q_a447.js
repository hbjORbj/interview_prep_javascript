/*
Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, 

return the values of the nodes you can see ordered from top to bottom.
*/

var rightSideView = function (root) {
  let res = [];
  let rightLeafDepth = 0;
  dfsTraversal(root, res, 0);
  return res;
};

const dfsTraversal = (root, res, depth) => {
  if (!root) {
    return;
  }
  if (depth > res.length - 1) {
    res.push(root.val);
  }
  dfsTraversal(root.right, res, depth + 1);
  dfsTraversal(root.left, res, depth + 1);
};

// perform preorder traversal that visits root, right, left instead of root, left, right
// keep track of the depth of the right-most leaf
// if the first node with greater depth is found during traversing the rest of the tree,
// record the node, increment depth and continue
