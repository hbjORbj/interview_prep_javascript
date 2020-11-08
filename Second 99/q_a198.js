/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:
- a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

var isBalanced = function(root) {
    let balanced = true;
    
    function findHeight(root) {
        if (!root) return 0;
        if (balanced === false) return; // optimisation: early exit

        let leftHeight = findHeight(root.left);
        let rightHeight = findHeight(root.right);
        let diff = Math.abs(leftHeight - rightHeight);

        if (diff > 1) balanced = false;
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    findHeight(root);
    return balanced;
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(H), call stack will possibly go as deep as height
};