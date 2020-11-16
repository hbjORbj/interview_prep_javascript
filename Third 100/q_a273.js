/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. 

Otherwise, the NOT null node will be used as the node of new tree.
*/

// We will create a function that takes two trees and return the merged tree.
// If both root nodes exist, we add up their values for the root of our new, merged tree.
// Else, we take the value of either of two roots for the root of our new, merged tree.
// We perform this function on left subtrees of both roots and the result becomes our root's left subtree. We do the same for our root's right subtree. We return the root now.

var mergeTrees = function(t1, t2) {
    if (!t1 || !t2) return t1 || t2;
    return merge(t1, t2);
    // Time Complexity: O(min(m, n)), m = # of nodes in t1 and n = # of nodes in t2
    // Space Complexity: O(m + n)
};

function merge(node1, node2) {
    if (!node1 && !node2) return null;
    let val = (node1 && node2) ? (node1.val + node2.val) : (node1.val || node2.val);
    let root = new TreeNode(val);
    root.left = (node1.left && node2.left) ? merge(node1.left, node2.left) : (node1.left || node2.left);
    root.right =  (node1.right && node2.right) ? merge(node1.right, node2.right) : (node1.right || node2.right);
    return root;
}

/***************************************************************************************************/

var mergeTrees = function(t1, t2) {
    return merge(t1, t2);
    // Time Complexity: O(min(m, n))
    // Space Complexity: O(min(m, n))
};

function merge(node1, node2) {
    if (!node1 || !node2) return node1 || node2;
    node1.val += node2.val;
    node1.left = merge(node1.left, node2.left);
    node1.right = merge(node1.right, node2.right);
    return node1;
}