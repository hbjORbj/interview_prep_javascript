/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

var minDepth = function(root) {
    if (!root) return 0;
    let queue = [{node: root, level: 1}];  
    while (queue.length) {
        let {node, level} = queue.shift();
        if (!node.left && !node.right) return level;
        if (node.left) queue.push({node: node.left, level: level+1});
        if (node.right) queue.push({node: node.right, level: level+1});
    }
	// Time Complexity: O(n)
    // Space Complexity: O(n)
};

var minDepth = function(root) {
    if (!root) return 0;
    let minDepth = Infinity;
    function dfsTraversal(root, depth) {
        if (!root) return;
        if (!root.left && !root.right) {
            minDepth = Math.min(minDepth, depth);
            return;
        }
        dfsTraversal(root.left, depth + 1);
        dfsTraversal(root.right, depth + 1);
    }
    dfsTraversal(root, 1);
    return minDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(n), in the worst case, in case of a skewed tree
};