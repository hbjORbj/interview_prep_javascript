/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
*/

// DFS
var isSymmetric = function(root) {
    if (!root) return true;
    
    function check(node1, node2) {
        if (node1 == null && node2 == null) return true; // reached leaf nodes
        if (node1 == null || node2 == null) return false; // asymmetric
        return node1.val === node2.val 
            && check(node1.left, node2.right) 
            && check(node1.right, node2.left);    
    }
    
    return check(root.left, root.right);
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(H) or O(N), call stack can go as deep as height of tree and height can be at most N (in case of a skewed tree)
};

// BFS
var isSymmetric = function(root) {
    let queue = [root, root];
    while (queue.length > 0) {
        let node1 = queue.shift(), node2 = queue.shift();
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null) return false;
        if (node1.val !== node2.val) return false;
        queue.push(node1.left, node2.right);
        queue.push(node1.right, node2.left);
    }
    
    return true;
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(n/2) = O(n), the bottom level could have at most n/2 nodes
}