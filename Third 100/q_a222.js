/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T 

that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

/**********************************************************************/ 
// BFS
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
    // Space Complexity: O(n), the map will contain n nodes
};

/**********************************************************************/ 
var lowestCommonAncestor = function(root, p, q) {
    let ancestorsP = new Map(), ancestorsQ = new Map();
    findAncestors(root, p, ancestorsP);
    findAncestors(root, q, ancestorsQ);
    ancestorsP.set(root, 1);
    ancestorsQ.set(root, 1);
    
    for (let ancestor of ancestorsP.keys()) {
        // the first ancestor found is the lowest common ancestor
        if (ancestorsQ.has(ancestor)) return ancestor;
    }
    return null;
    // Time Complexity: O(n), we possible visit all nodes
    // Space Complexity: O(n), in case of a skewed tree, the call stack can go as deep as n and also the map can contain n nodes in this case
};

function findAncestors(root, target, map) {
    if (!root) return;
    if (root == target) return true;
    if (findAncestors(root.left, target, map) == true) {
        map.set(root.left,  1);
        return true;
    }
    if (findAncestors(root.right, target, map) == true) {
        map.set(root.right, 1);
        return true;
    }
}

/**********************************************************************/ 
var lowestCommonAncestor = function(root, p, q) {
    function findLca(root, p, q) {
        if (!root) return null;
        if (p == root || q == root) return root;
        let left = findLca(root.left, p, q);
        let right = findLca(root.right, p, q);
        if (left && right) return root;
        if (left == null) return right;
        if (right == null) return left;
    }
    return findLca(root, p, q);
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(H) or O(n), call stack will go as deep as the height of tree, and the height can be at most n in case of a skewed tree.
};
// What we want to do at each root node is to check if there is p or q in the left subtree and if there is p or q in the right subtree. 
// If we find one in left subtree and the other in the right subtree, we return the root node as this is the lowest common ancestor.
// If we find one either in the left subtree or in the right subtree, we return the subtree so we can tell our parent node that we've found one of p and q down in the tree. 
// If we find none in either subtree, we return null.