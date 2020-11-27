/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

var maxDepth = function(root) {
    let max = 0;
    dfs(root, 0);
    return max;
    function dfs(root, depth) {
        if (!root) {
            max = Math.max(max, depth);
            return;
        }
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(H), call stack can go as deep as height of tree
};