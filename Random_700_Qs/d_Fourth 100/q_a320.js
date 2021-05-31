/*
Given a binary tree, you need to compute the length of the diameter of the tree. 
 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
 
This path may or may not pass through the root. 

The path is the number of edges in the path, not the number of nodes.
*/

var diameterOfBinaryTree = function (root) {
  if (!root) return null;
  let max = 0;
  getHeight(root);
  return max;
  function getHeight(root) {
    if (!root) return 0; // height is defined to be the number of nodes in the path in this particular question instead of the number of edges
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    max = Math.max(max, leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};

// Diameter: Height of left subtree + Height of right subtree
// Height: Max(Height of left subtree, Height of right subtree) + 1
