// Invert a binary tree.

var invertTree = function(root) {
    return invert(root);
    function invert(root) {
        if (!root) return null;
        let invertedLeft = invert(root.left);
        let invertedRight = invert(root.right);
        root.left = invertedRight;
        root.right = invertedLeft;
        return root;
        // Time Complexity: O(N), we visit every node exactly once
        // Space Complexity: O(H), call stack can go as deep as height of tree
    }
};

// For every root node, we need to switch the left subtree and the right subtree
// We will use a bottom-up approach so as we go up from the bottom to the top,
// we will pass on inverted left subtrees and right subtrees and we repeat this until
// we reach the root of the entire tree.