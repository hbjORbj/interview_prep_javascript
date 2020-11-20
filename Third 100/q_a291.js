/*
Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, 

and every node has no left child and only one right child.
*/

var increasingBST = function(root) {
    if (!root) return null;
    let values = inorder(root);
    let head = new TreeNode();
    let cur = head;
    for (let i = 0; i < values.length; i++) {
        cur.right = new TreeNode(values[i]);
        cur = cur.right;
    }
    return head.right;
    // Time Complexity: O(N), we visit all nodes
    // Space Complexity: O(N), construct a new tree using N nodes
};

function inorder(root, vals=[]) {
    if (!root) return;
    inorder(root.left, vals);
    vals.push(root.val);
    inorder(root.right, vals);
    return vals;
};

/******************************************************************************************************************/

var increasingBST = function(root) {
    let newHead = new TreeNode();
    let cur = newHead;
    inorder(root);
    return newHead.right;
    // Time Complexity: O(N)
    // Space Complexity: O(H), call stack can go as deep as height of tree
    
    function inorder(root) {
        if (!root) return null;
        inorder(root.left);

        root.left = null;
        cur.right = root;
        cur = cur.right;

        inorder(root.right);
    }
};