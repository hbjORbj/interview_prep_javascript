// Given an n-ary tree, return the postorder traversal of its nodes' values.

// Recursive
var postorder = function(root) {
    let res = [];
    function dfsTraversal(root) {
        if (!root) return;
        for (let child of root.children) {
            dfsTraversal(child);
        }
        res.push(root.val);
    }
    dfsTraversal(root);
    return res;
    // Time Complexity: O(N)
    // Space Complexity: O(H)
};

// Iterative
var postorder = function(root) {
    if (!root) return [];
    let stack = [root], res = [];
    while (stack.length > 0) {
        let node = stack[stack.length-1];
        if (node.children.length > 0) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                if (node.children[i]) stack.push(node.children[i]);
            }
            node.children = [];
        } else {
            res.push(stack.pop().val);    
        }
    }
    return res;
    // Time Complexity: O(N)
    // Space Complexity: O(H)
}