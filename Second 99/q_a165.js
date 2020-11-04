/*
Given a binary tree, imagine yourself standing on the right side of it, 

return the values of the nodes you can see ordered from top to bottom.
*/

var rightSideView = function(root) {
    if (!root) return [];
    let queue = [root], values = [];
    while (queue.length > 0) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        values.push(level[level.length-1]);
    }
    return values;
    // Time Complexity: O(n)
    // Space Complexity: O(n), the fattest level can contain n/2 nodes in case of a full tree
};

var rightSideView = function(root) {
    let values = [], maxDepth = 0;
    function traverse(root, depth) {
        if (root == null) return;
        if (depth > maxDepth) {
            maxDepth = depth;
            values.push(root.val);
        }
        traverse(root.right, depth+1);
        traverse(root.left, depth+1);
    }
    traverse(root, 1);
    return values;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}