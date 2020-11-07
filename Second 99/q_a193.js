/*
We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.
*/

var distanceK = function(root, target, K) {
    let m = new Map();
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left) {
            m.set(node.left, node);
            queue.push(node.left);
        }
        if (node.right) {
            m.set(node.right, node);
            queue.push(node.right);
        }
    }
    // (key, value) in m is (child, parent)
    
    let values = [], visited = new Map();
    queue = [{node: target, distance: 0}];
    
    while (queue.length > 0) {
        let {node, distance} = queue.shift();
        if (visited.has(node)) continue;
        
        visited.set(node, 1);
        
        if (distance == K) {
            values.push(node.val);
            if (queue.length == 0) break; // optimisation
        }

        if (node.left && !visited.has(node.left)) {
            queue.push({node: node.left, distance: distance+1});
        }
        if (node.right && !visited.has(node.right)) {
            queue.push({node: node.right, distance: distance+1});
        }
        if (m.has(node) && !visited.has(m.get(node))) {
            queue.push({node: m.get(node), distance: distance+1});
        }
    }
    return values;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};