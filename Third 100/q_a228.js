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
    // Time Complexity: O(n^2) due to unshift(), which can be O(n)
    // Space Complexity: O(n), the bottom can contain at most n/2 nodes
};


// Using Two Stacks
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let stack1 = [root], stack2 = [];
    let res = [];
    while (stack1.length > 0 || stack2.length > 0) {
        let level = [];
        if (res.length % 2 == 0) { // normal order (next order is reverse order)
            while (stack1.length > 0) {
                let node = stack1.pop();
                level.push(node.val);
                if (node.left) stack2.push(node.left);   
                if (node.right) stack2.push(node.right);
            }
        }
        else { // reverse order (next order is normal order)
            while (stack2.length > 0) {
                let node = stack2.pop();
                level.push(node.val);
                if (node.right) stack1.push(node.right);
                if (node.left) stack1.push(node.left);
            }
        }
        res.push(level);
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};