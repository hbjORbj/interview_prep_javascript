/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T 

that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

var lowestCommonAncestor = function(root, p, q) {
    let m = new Map();
    // (key, value) in m represents (node, parent node)
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
    let ancestorsP = new Map(); // this map contains p and its ancestors
    ancestorsP.set(p, 1);
    while (m.has(p)) {
        let ancestor = m.get(p);
        ancestorsP.set(ancestor, 1);
        p = m.get(p);
    }
    
    if (ancestorsP.has(q)) return q; 
    // check if this map has q or its ancestors
    // return the first one found
    while (m.has(q)) {
        let ancestor = m.get(q);
        if (ancestorsP.has(ancestor)) return ancestor;
        q = m.get(q);
    }
    return null;
    // Time Complexity: O(n), we visit all nodes
    // Space Complexity: O(n/2) = O(n), the bottom level can contain n/2 nodes at most and therefore queue might contain n/2 nodes
};