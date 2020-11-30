/*
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:
- Given target value is a floating point.
- You are guaranteed to have only one unique value in the BST that is closest to the target.
*/

var closestValue = function(root, target) {
    let minDiff = Infinity;
    let closest = null;
    dfs(root);
    return closest;
    
    function dfs(root) {
        if (!root) return;
        let diff = Math.abs(root.val - target);
        if (minDiff > diff) {
            minDiff = diff;
            closest = root.val;
        }
        dfs(root.left);
        dfs(root.right);
        
    }
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(H), call stack can go as deep as height of tree
};

/*************************************************************************************************/

var closestValue = function(root, target) {
    if (!root) return -1;
    let queue = [root];
    let minDiff = Infinity, closest = null;
    while (queue.length > 0) {
        let node = queue.shift();
        let diff = Math.abs(node.val - target);
        if (minDiff > diff) {
            minDiff = diff;
            closest = node.val;
        }
        if (target < node.val) {
            if (node.left) queue.push(node.left);
        } else {
            if (node.right) queue.push(node.right);
        }
    }
    return closest;
    // Time Complexity: O(H)
    // Space Complexity: O(1)
};

/*************************************************************************************************/

var closestValue = function(root, target) {
    let minDiff = Infinity, closest = null;
    while (root !== null) {
        let diff = Math.abs(root.val - target);
        if (minDiff > diff) {
            minDiff = diff;
            closest = root.val;
        }
        if (root.val > target) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return closest;
    // Time Complexity: O(H)
    // Space Complexity: O(1)
}
