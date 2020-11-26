/*
Given a binary tree, you need to compute the length of the diameter of the tree. 
 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
 
This path may or may not pass through the root. 
*/

var diameterOfBinaryTree = function(root) {
    let max = 0;
    getDepth(root);
    return max;
    function getDepth(root) {
        if (!root) return 0;
        let leftDepth = getDepth(root.left);
        let rightDepth = getDepth(root.right);
        max = Math.max(max, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}; 

// Diameter = max depth of left subtree + max depth of right subtree
// Depth of tree = max(depth of left subtree, depth of right subtree) + 1