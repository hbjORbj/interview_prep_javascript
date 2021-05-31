// Given an n-ary tree, return the preorder traversal of its nodes' values.

// Recursive
var preorder = function(root) {
    let res = [];
    function dfsTraversal(root) {
        if (!root) return;
        res.push(root.val);
        for (let child of root.children) {
            dfsTraversal(child);
        }
    }
    dfsTraversal(root);
    return res;
    // Time Complexity: O(N)
    // Space Complexity: O(H)
};

// Iterative
var preorder = function(root) {
    if (!root) return [];
    let stack = [root], res = [];
    while (stack.length > 0) {
        let node = stack.pop();
        res.push(node.val);
        for (let i = node.children.length - 1; i >= 0; i--) {
            if (node.children[i]) stack.push(node.children[i]);
        }
    }
    return res;
    // Time Complexity: O(N)
    // Space Complexity: O(H)
}