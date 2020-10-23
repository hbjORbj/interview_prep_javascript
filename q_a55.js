/*
Given a Binary Tree that can contain duplicate elements, find the first occurrence of a number N.

Qs: 
1. By first occurrence, you mean a node that would come first in an inorder traversal?
- Yes.
*/

function inorderTraversal(root, N) {
    let res = null;
    function dfs(root) {
        if (root == null || res !== null) return;
        dfs(root.left)
        if (res == null && root.val == N) res = root;
        dfs(root.right)
    }
    dfs(root);
    return res;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/