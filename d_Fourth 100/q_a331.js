/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
*/

var levelOrderBottom = function(root) {
    if (!root) return [];
    let traversal = [], queue = [root];
    while (queue.length > 0) {
        let len = queue.length;
        let level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);    
        }
        traversal.push(level);
    }
    return traversal.reverse();
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(N), the bottom level can contain at most N / 2 nodes and therefore 
    // queue can contain at most N / 2 nodes as well
};