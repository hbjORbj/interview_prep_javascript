/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.
*/

// Recursive DFS Solution
var maxDepth = function(root) {
    let maxDepth = 0;
    function dfs(root, depth) {
        if (!root) {
            maxDepth = Math.max(depth, maxDepth);
            return;
        }
        dfs(root.left, depth+1);
        dfs(root.right, depth+1);
    }
    dfs(root, 0);
    return maxDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

// Iterative BFS Solution
var maxDepth = function(root) {
    if (!root) return 0;
    let maxDepth = 0, queue = [{node: root, level:1}];
    while(queue.length) {
        let {node, level} = queue.shift();
        maxDepth = Math.max(maxDepth, level);
        if (node.left) queue.push({node: node.left, level: level+1});
        if (node.right) queue.push({node: node.right, level: level+1});
    }
    return maxDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

/*
Test Cases: [3,9,20,null,null,7,8] => 3

Idea: Use DFS and Recursion to reach the end of every single path, or every leaf node. Once we reach the end of a path, compare the depth to
maxDepth and store it in maxDepth if it is greater than maxDepth. If we do this for every path, we will get the maximum depth
of the tree.

Category: DFS, BFS, Tree, Recursion
*/