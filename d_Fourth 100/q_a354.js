/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: 

“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

// DFS with using HashTable
var lowestCommonAncestor = function(root, p, q) {
    let m = new Map();
    fillParents(root, m);
    let parentP = m.get(p);
    let parentsP = new Map();
    parentsP.set(p, 1);
    while (parentP) {
        parentsP.set(parentP, 1);
        parentP = m.get(parentP);
    }
    
    // we check for q as well in case q is at a higher level than p
    while (q) {
        if (parentsP.has(q)) return q;
        q = m.get(q);
    }
    return null;
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

function fillParents(root, m) {
    if (root.left) {
        m.set(root.left, root);
        fillParents(root.left, m);
    }
    if (root.right) {
        m.set(root.right, root);
        fillParents(root.right, m);
    }
};

/******************************************************************************************/
// DFS without using HashTable
var lowestCommonAncestor = function(root, p, q) {
    return findLCA(root);
    
    function findLCA(root) {
        if (!root) return null;
        if (root == p || root == q) return root;
        let left = findLCA(root.left);
        let right = findLCA(root.right);
        if (left && right) return root;
        return left || right;
    }
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};
