/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
*/

// BFS
var levelOrderBottom = function(root) {
    if (!root) return [];
    let values = [], queue = [root];
    while (queue.length > 0) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        values.push(level);
    }
    values.reverse();
    return values;
    // Time Complexity: O(N), we visit all nodes
    // Space Complexity: O(N), the bottom level can contain at most n/2 nodes and therefore so can queue.
};

// DFS
var levelOrderBottom = function(root) {
    let levels = [];
    dfs(root, 0);
    levels.reverse();
    return levels;
    
    function dfs(root, depth) {
        if (!root) return;
        if (levels[depth]) levels[depth].push(root.val);
        else levels[depth] = [root.val];
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    // Time Complexity: O(N), we visit all nodes
    // Space Complexity: O(N), call stack can go as deep as N (in case of a skewed tree) and also levels array contains N nodes
}