/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array. 
*/

// Idea:
// Perform a BFS level-order traveral and add up all the values up in each level and divide by the number of nodes in the level
var averageOfLevels = function(root) {
    let queue = [root], values = [];
    while (queue.length > 0) {
        let len = queue.length;
        let sum = 0, numOfNodes = 0;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            sum += node.val;
            numOfNodes++;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        values.push(sum / numOfNodes);
    }
    return values;
    // Time Complexity: O(n), we visit all nodes
    // Space Complexity: O(n/2) = O(n), the bottom level can have at most n/2 nodes and therefore queue can have at most n/2 nodes as well
};