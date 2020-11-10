/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. 

(ie, from left to right, then right to left for the next level and alternate between).
*/

var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let queue = [root], res = [];
    while (queue.length > 0) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (res.length % 2 == 0) level.push(node.val);
            else level.unshift(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level);
    }
    return res;
    // Time Complexity: O(n), we visit all nodes
    // Space Complexity: O(n), the bottom can contain at most n/2 nodes
};