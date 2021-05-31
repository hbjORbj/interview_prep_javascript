/*
Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:
- The node of a binary tree is a leaf if and only if it has no children
- The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
- The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.
*/

var lcaDeepestLeaves = function(root) {
    if (!root) return null;
    let maxDepth = getMaxDepth(root, 0);
    return findLCA(root, 0,  maxDepth);
    // Time Complexity: O(n), we visit all nodes
    // Space Complexity: O(H), call stack can go as deep as height of tree
};

function findLCA(root, depth, targetDepth) {
    if (!root) return null;
    if (depth === targetDepth) {
        return root;
    }
    let leftSub = findLCA(root.left, depth + 1, targetDepth);
    let rightSub = findLCA(root.right, depth + 1, targetDepth);
    if (leftSub && rightSub) return root;
    if (leftSub) return leftSub;
    if (rightSub) return rightSub;
}

function getMaxDepth(root, depth) {
    if (!root) return 0;
    if (!root.left && !root.right) {
        return depth;
    }
    return Math.max(getMaxDepth(root.left, depth + 1), getMaxDepth(root.right, depth + 1));
}