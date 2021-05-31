/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

var maxDepth = function(root) {
    if (!root) return 0;
    let maxDepth = 0;
    function traverse(root, depth) {
        if (root.children == 0) {
            maxDepth = Math.max(maxDepth, depth);
            return;
        }
        for (let child of root.children) {
            traverse(child, depth+1);
        }
    }
    traverse(root, 1);
    return maxDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};