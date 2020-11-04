/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.
*/

// DFS
var maxDepth = function(root) {
    let maxDepth = 0;
    function traverse(root, depth) {
        if (root == null) { // reached the leaf node
            maxDepth = Math.max(maxDepth, depth);
            return;
        }
        traverse(root.left, depth+1);
        traverse(root.right, depth+1);
    }
    traverse(root, 0);
    return maxDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(n), in the worst case; in case of a skewed tree
};

// BFS
var maxDepth = function(root) {
    if (!root) return 0;
    
    let queue = [], maxDepth = 0;
    queue.push({node: root, depth: 1});
    while (queue.length > 0) {
        let {node, depth} = queue.shift();
        maxDepth = Math.max(maxDepth, depth);
        if (node.left) queue.push({node: node.left, depth: depth+1});
        if (node.right) queue.push({node: node.right, depth: depth+1});
    }
    return maxDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}