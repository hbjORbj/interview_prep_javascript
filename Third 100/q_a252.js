/*
Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if it's parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you can't).
*/

var removeLeafNodes = function(root, target) {
    dfs(root, target);
    if (root.val == target && isLeaf(root)) return null;
    else return root;
    // Time Complexity: O(N), we visit all nodes
    // Space Complexity: O(H), call stack can go as deep as height of tree
};

function dfs(root, target) {
    if (!root) return;
    if (root.left && root.left.val == target && isLeaf(root.left)) {
        root.left = null;
    }
    if (root.right && root.right.val == target && isLeaf(root.right)) {
        root.right = null;
    }
    dfs(root.left, target);
    if (root.left && root.left.val == target && isLeaf(root.left)) {
        root.left = null;
    }
    dfs(root.right, target);
    if (root.right && root.right.val == target && isLeaf(root.right)) {
        root.right = null;
    }
}

function isLeaf(root) {
    return !root.left && !root.right;
}