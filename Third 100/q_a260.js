/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root. 
*/

var diameterOfBinaryTree = function(root) {
    let max = 0;
    getDepth(root); // For a subtree, the sum of the left subtree's max depth and the right subtree's max depth is the longest possible path in the subtree. So, we perform this on every subtree and update the maximum length.
    return max;
    function getDepth(root) { 
        if (!root) return 0;
        let left = getDepth(root.left);
        let right = getDepth(root.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    // Time Complexity: O(N)
    // Space Complexity: O(H)
}; 