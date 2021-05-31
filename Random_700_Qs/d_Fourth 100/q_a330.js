/*
Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
*/

var rangeSumBST = function(root, low, high) {
    let sum = 0;
    dfs(root);
    return sum;
    function dfs(root) {
        if (!root) return;
        if (root.val >= low && root.val <= high) {
            sum += root.val;
        }
        dfs(root.left);
        dfs(root.right);
    }
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(H), call stack can go as deep as height of tree
};