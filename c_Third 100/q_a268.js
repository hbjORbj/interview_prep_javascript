/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. 

A subtree of s is a tree consists of a node in s and all of this node's descendants. 

The tree s could also be considered as a subtree of itself.
*/

var isSubtree = function(s, t) {
    let isExist = false;
    traverse(s, t);
    return isExist;
    
    function traverse(root, target) {
        if (!root) return;
        if (isExist) return;
        if (root.val === target.val) {
            isExist = isEqual(root, target);
        }
        traverse(root.left, target);
        traverse(root.right, target);
    }
};
// Time Complexity: O(m*n), m = size of s and n = size of t | isEqual() which has a time complexity of O(n) can be called for every node in s so the total time complexity is O(m*n)
// Space Complexity: O(m), call stack can go as deep as m (which will be greater than or equal to n)

// checks if two subtrees are the same
function isEqual(node1, node2) {        
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return node1.val == node2.val &&
        isEqual(node1.left, node2.left) && 
        isEqual(node1.right, node2.right);
};