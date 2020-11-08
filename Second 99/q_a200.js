/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.
*/

var binaryTreePaths = function(root) {
    let paths = [];
    
    function dfsTraversal(root, cur) {
        if (!root) return;
        if (!root.left && !root.right) {
            paths.push(cur + root.val);
            return;
        }
        dfsTraversal(root.left, cur + root.val + "->");
        dfsTraversal(root.right, cur + root.val + "->");
    }
    
    dfsTraversal(root, "");
    return paths;
    // Time Complexity: O(N), we always visit all nodes
    // Space Complexity: O(H) or O(N), height can be at most N (in case of a skewed tree)
};