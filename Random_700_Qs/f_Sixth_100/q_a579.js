/*
Construct Binary Search Tree from Preorder Traversal

Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.

It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.

A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.

A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.
*/

/*
Preorder: root-left-right
*/
var bstFromPreorder = function(preorder) {
    return dfs(-Infinity, Infinity);
    function dfs(low, high) {
        if (preorder[0] <= low || preorder[0] >= high) {
            return null;
        }
        if (preorder.length === 0) {
            return null;
        }
        let root = new TreeNode(preorder.shift());
        root.left = dfs(low, root.val);
        root.right = dfs(root.val, high);
        return root;
    }
    // T.C: O(N)
    // S.C: O(H)
};