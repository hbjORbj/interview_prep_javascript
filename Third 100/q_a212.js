/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
*/

var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root], res = [];
    while (queue.length > 0) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level);
    }
    return res;
    // Time Complexity: O(n), we visit all nodes
    // Space Complexity: O(n/2) = O(n), the bottom level can contain n/2 nodes at most
};