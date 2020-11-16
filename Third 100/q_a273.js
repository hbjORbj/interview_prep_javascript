/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. 

Otherwise, the NOT null node will be used as the node of new tree.
*/

var mergeTrees = function(t1, t2) {
    return merge(t1, t2);
    // Time Complexity: O(min(m, n)), m = # of nodes in t1 and n = # of nodes in t2
    // Space Complexity: O(m + n)
};

function merge(node1, node2) {
    if (!node1 || !node2) return node1 || node2;
    let root = new TreeNode(node1.val + node2.val);
    root.left = merge(node1.left, node2.left);
    root.right = merge(node1.right, node2.right);
    return root;
}

/***************************************************************************************************/

// To merge two trees, we need to merge the root node and left subtree and right subtree.
// Two cases exist when we try to merge the root nodes. If both nodes exist, we simply add t2's value into t1's value. Else, we have to use either of the two.
// Now, how do we merge the left subtree and right subtree? 
// We simply need to perform this same function on the left subtrees of the two trees and the right subtrees of the two trees. As a result, we have merged root node, merged left subtree and merged right subtree. Done!

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