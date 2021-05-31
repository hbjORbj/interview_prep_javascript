/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.
*/

// BFS
var isCousins = function(root, x, y) {
    if (x == root.val || y == root.val || !root) return false;
    let parentX, depthX, parentY, depthY;
    let queue = [{node: root, depth: 0}];
    while (queue.length > 0) {
        let {node, depth} = queue.shift();
        if (node.left) {
            queue.push({node: node.left, depth: depth + 1});
            if (node.left.val == x) {
                parentX = node.val;
                depthX = depth + 1;
            }
            if (node.left.val == y) {
                parentY = node.val;
                depthY = depth + 1;
            }
        }
        if (node.right) {
            queue.push({node: node.right, depth: depth + 1});
            if (node.right.val == x) {
                parentX = node.val;
                depthX = depth + 1;
            }
            if (node.right.val == y) {
                parentY = node.val;
                depthY = depth + 1;
            }
        }
        if (parentX && parentY && depthX && depthY) break;
    }
    return parentX !== parentY && depthX === depthY;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

// DFS
var isCousins = function(root, x, y) {
    if (x == root.val || y == root.val || !root) return false;
    let [parentX, depthX] = dfsTraversal(root, x, 0);
    let [parentY, depthY] = dfsTraversal(root, y, 0);
    return parentX !== parentY && depthX == depthY;
    // Time Complexity: O(n), possibly visit all nodes
    // Space Complexity: O(n), call stack can go at most n (in case of a skewed tree)
};

function dfsTraversal(root, target, depth) {
    if (!root) return;
    if (root.left && root.left.val == target) return [root.val, depth + 1];
    if (root.right && root.right.val == target) return [root.val, depth + 1];
    return dfsTraversal(root.left, target, depth + 1) ||
           dfsTraversal(root.right, target, depth + 1);
};