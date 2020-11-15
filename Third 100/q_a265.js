/*
You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.
*/

var sumRootToLeaf = function(root) {
    let res = 0;
    dfs(root);
    return res;
    function dfs(root, num = "") {
        if (!root) return;
        if (!root.left && !root.right) {
            res += parseInt(num + root.val, 2);
            return;
        }
        dfs(root.left, num + root.val);
        dfs(root.right, num + root.val);
    }
    // Time Complexity: O(N)
    // Space Complexity: O(H)
};