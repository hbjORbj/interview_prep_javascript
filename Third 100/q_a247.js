/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.
*/

var isCousins = function(root, x, y) {
    if (x == root.val || y == root.val) return false;
    let m = new Map();
    let queue = [{node: root, depth: 0}];
    while (queue.length > 0) {
        let {node, depth} = queue.shift();
        if (node.left) {
            m.set(node.left.val, {parent: node.val, depth: depth + 1});
            queue.push({node: node.left, depth: depth + 1});
        }
        if (node.right) {
            m.set(node.right.val, {parent: node.val, depth: depth + 1});
            queue.push({node: node.right, depth: depth + 1});
        }
    }
    return (m.get(x).parent !== m.get(y).parent
           && m.get(x).depth == m.get(y).depth);
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};