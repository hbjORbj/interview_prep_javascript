/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/

var isSameTree = function(p, q) {
    function isEqual(root1, root2) {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;
        return (root1.val == root2.val && isEqual(root1.left, root2.left)
                && isEqual(root1.right, root2.right));
    }
    return isEqual(p, q);
    // Time Complexity: O(n), we visit all nodes if they are the same tree
    // Space Complexity: O(H), call stack can go as deep as the height of tree, and the height can be n at most in case of a skewed tree so we can say O(n), too.
};