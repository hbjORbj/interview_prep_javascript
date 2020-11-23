/*
In a binary tree, a lonely node is a node that is the only child of its parent node. 

The root of the tree is not lonely because it does not have a parent node.

Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. 

Return the list in any order.
*/

var getLonelyNodes = function(root) {
    let res = [];
    dfs(root);
    return res;
    // Time Complexity: O(N), we visit all nodes
    // Space Complexity: O(H), call stack can go as deep as height of tree and this height can be at most N (in case of a skewed tree)
    
    function dfs(root) {
        if (!root) return;
        if (root.left && !root.right) {
            res.push(root.left.val);
        }
        if (!root.left && root.right) {
            res.push(root.right.val);
        }
        dfs(root.left);
        dfs(root.right);
    }
};