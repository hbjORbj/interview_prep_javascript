/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 

The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

// BFS (Level-order traversal)
var connect = function(root) {
    if (!root) return null;
    let queue = [root];
    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (i !== len-1) {
                node.next = queue[0];
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return root;
    // Time Complexity: O(N), we visit all nodes exactly once
    // Space Complexity: O(N), the bottom level can contain at most N/2 nodes and therefore queue can contain N/2 nodes at most
};

// DFS
var connect = function(root) {
    setPointer(root);
    return root;
    
    function setPointer(root) {
        if (!root || !root.left || !root.right) return;
        let left = root.left;
        let right = root.right;
        left.next = right;
        if (root.next) right.next = root.next.left;
        setPointer(root.left);
        setPointer(root.right);
    }
    // Time Complexity: O(N), we visit every node exactly once
    // Space Complexity: O(1), we simply relink given nodes
};