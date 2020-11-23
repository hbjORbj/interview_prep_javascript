/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.
*/


var isValidBST = function(root) {
    if (!root) return true;
    let arr = [];
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] >= arr[i+1]) return false;
    }
    return true;
    // Time Complexity: O(n)
    // Space Complexity: O(n); always O(n)
};

var isValidBST = function(root) {
    return isValid(root, -Infinity, Infinity);
    
    function isValid(root, low, high) {
        if (!root) return true;
        return (root.val > low &&
                root.val < high &&
                isValid(root.left, low, root.val) &&
                isValid(root.right, root.val, high));
    }
    // Time Complexity: O(n)
    // Space Complexity: O(n), only in the worst case; in case of a skewed tree
};