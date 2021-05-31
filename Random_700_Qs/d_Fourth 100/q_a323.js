/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. 

A subtree of s is a tree consists of a node in s and all of this node's descendants. 

The tree s could also be considered as a subtree of itself.
*/

var isSubtree = function(s, t) {
    let isSubtreeBool = false;
    dfs(s);
    return isSubtreeBool;
    function dfs(root) {
        if (!root) return;
        if (isSubtreeBool == true) return;
        if (root.val == t.val) {
            isSubtreeBool = isEqual(root, t);
        }
        dfs(root.left);
        dfs(root.right);
    }
    // Time Complexity: O(M * N), M = # of nodes in s, N = # of nodes in t
    // We might call isEqual(), which has a time complexity of O(N), for each node of s
    // Space Complexity: O(M), M = # of nodes in s
};

function isEqual(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
    return tree1.val == tree2.val && isEqual(tree1.left, tree2.left)
            && isEqual(tree1.right, tree2.right);
}