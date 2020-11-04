/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
*/

function levelOrder(root) {
    if (root == null) return [];
    let queue = [], values = [];
    queue.push(root);
    while (queue.length > 0) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        values.push(level);
    }
    return values;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}