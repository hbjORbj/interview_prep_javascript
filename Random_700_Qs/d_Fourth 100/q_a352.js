/*
Given a binary tree, flatten it to a linked list in-place.
*/

var flatten = function(root) {
    flattenHelper(root);
    return root;
    
    function flattenHelper(root) {
        if (!root) return null;
        let leftTail = flattenHelper(root.left);
        let rightTail = flattenHelper(root.right);
        if (!leftTail && !rightTail) return root;
        if (leftTail) {
            leftTail.right = root.right;
            root.right = root.left;
            root.left = null;    
        };
        return rightTail ? rightTail : leftTail;
    }
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(N), call stack can go as deep as number of nodes
};

    