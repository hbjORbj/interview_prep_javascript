/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
*/

var inorderTraversal = function(root) {
    let values = [];
    inorder(root);
    return values;
    
    function inorder(root) {
        if (!root) return;
        inorder(root.left);
        values.push(root.val);
        inorder(root.right);
    };
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(H), call stack can go as deep as height of tree
};