/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
*/

// Modified Pre-order: we will visit right node, root node and left node.
var rightSideView = function(root) {
    let values = [];
    traverse(root, 0);
    return values;
    
    function traverse(root, depth) {
        if (!root) return;
        traverse(root.right, depth + 1);
        if (values[depth] == undefined) {
            values[depth] = root.val;
        }
        traverse(root.left, depth + 1);
    }
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(H), call stack can go as deep as height of tree
};