/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
*/

var isSymmetric = function(root) {
    if (!root) return true;
    return checkSymmetry(root.left, root.right);
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(H), call stack can go as deep as height of tree
};

function checkSymmetry(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return root1.val == root2.val && checkSymmetry(root1.left, root2.right)
            && checkSymmetry(root1.right, root2.left);
}
