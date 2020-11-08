/*
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.
*/

// DFS
var isUnivalTree = function(root) {
    let val = root.val;
    
    function dfsTraversal(root) {
        if (!root) return;
        if (root.val !== val) return false;
        
        if (dfsTraversal(root.left) == false) return false;
        if (dfsTraversal(root.right) == false) return false;
        
        return true;
    }
    
    return dfsTraversal(root);
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(H) or O(N), call stack can possibly go as deep as height of tree and height can be at most N (in case of a skewed tree)
};

// BFS
var isUnivalTree = function(root) {
    let queue = [root], val = root.val;
    
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.val !== val) return false;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return true;
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(n / 2) == O(n), the fattest bottom level can be n / 2 at most
}