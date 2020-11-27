/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.
*/

var binaryTreePaths = function(root) {
    let paths = [];
    findPath(root, "");
    return paths;
    function findPath(root, path) {
        if (!root) return;
        if (!root.left && !root.right) {
            paths.push(path + root.val.toString());
            return;
        }
        findPath(root.left, path + root.val.toString() + "->");
        findPath(root.right, path + root.val.toString() + "->");
    }
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(H), call stack can go as deep as height of tree
};