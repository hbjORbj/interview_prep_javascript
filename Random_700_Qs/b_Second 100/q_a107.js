/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 

How would you optimize the kthSmallest routine?
*/

var kthSmallest = function(root, k) {
    let traversal = [];
    function traverse(root) { // in-order traversal
        if (root == null) return;
        traverse(root.left);
        traversal.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    return traversal[k-1];
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

var kthSmallest = function(root, k) {
    let res = null;
    function findKth(root) {
        if (root == null) return;
        if (res) return;
        findKth(root.left);
        k--;
        if (k == 0) res = root.val;
        findKth(root.right);
    }
    findKth(root);
    return res;
    // Time Complexity: O(H+k) H for reaching a leaf node and k for coming back up the tree k times to find the kth smallest node
    // Space Complexity: O(H) for call stack
    // O(N) in the worst case of the skewed tree, and O(log(N)) in the average case
    // of the balanced tree
}