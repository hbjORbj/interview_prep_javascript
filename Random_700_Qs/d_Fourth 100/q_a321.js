/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

var minDepth = function(root) {
    if (!root) return 0;
    let queue = [{node: root, depth: 1}];
    while (queue.length > 0) {
        let {node, depth} = queue.shift();
        if (!node.left && !node.right) return depth;
        if (node.left) {
            queue.push({node: node.left, depth: depth + 1});
        }
        if (node.right) {
            queue.push({node: node.right, depth: depth + 1});
        }
    }
    // Time Complexity: O(N), in the worst case, we visit all nodes
    // Space Complexity: O(N), the bottom level can contain at most N / 2 nodes, and therefore queue can contain N / 2 nodes at most as well
};
