/*
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
*/

var leafSimilar = function(root1, root2) {
    return getLeaves(root1).join("#") === getLeaves(root2).join("#");
    // [1,2,3].join("") is equal to [12,3].join("").
    // So, we need to append some special non-numerical value between numbers.
    // In this case, I used '#'.
    // [1,2,3].join("#") is "1#2#3" and [12,3].join("#") is "12#3".
    // Time Complexity: O(T1 + T2), we visit all nodes of each tree once
    // Space Complexity: O(T1 + T2), we can store at most T1 leaves and T2 leaves
};

function getLeaves(root, vals = []) {
    if (!root) return;
    if (!root.left && !root.right) {
        vals.push(root.val);
    }
    getLeaves(root.left, vals);
    getLeaves(root.right, vals);
    return vals;
}