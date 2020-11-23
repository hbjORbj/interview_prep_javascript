// Invert a binary tree.

var invertTree = function(root) {
    
    function invert(root) {
        if (!root) return null;
        let invertedLeft = invert(root.left);
        let invertedRight = invert(root.right);
        root.left = invertedRight;
        root.right = invertedLeft;
        
        return root;
    }
    invert(root);
    
    return root;
    
    // Time Complexity: O(N), we always visit all nodes
    // Space Complexity: O(H) or O(N), call stack can possibly go as deep as height of tree and the height can be N at most (in case of a skewed tree) 
};