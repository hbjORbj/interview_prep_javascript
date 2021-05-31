/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:
- a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

var isBalanced = function(root) {
    let balanced = true;
    isBalanced(root);
    return balanced;
    function isBalanced(root) {
        if (!root) return 0;
        if (!balanced) return;
        let leftDepth = isBalanced(root.left);
        let rightDepth = isBalanced(root.right);
        if (Math.abs(leftDepth - rightDepth) > 1) balanced = false;
        return Math.max(leftDepth, rightDepth) + 1;
    }
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(H), call stack can go as deep as height of tree
};