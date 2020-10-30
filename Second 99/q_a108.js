/*
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. 

It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
*/

// Recursive DFS Solution
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val);
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
    // Time Complexity: O(H)
    // Space Complexity: O(H) due to call stack; O(N) in the worst case of the skewed tree
    // and O(log(N)) in the average case of the balanced tree
}