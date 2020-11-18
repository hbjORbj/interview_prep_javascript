/*
Given the root of a binary tree, return the sum of every tree node's tilt.

The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. 

If a node does not have a left child, then the sum of the left subtree node values is treated as 0. 

The rule is similar if there the node does not have a right child.
*/

var findTilt = function(root) {
    let tilt = 0;
    computeSum(root);
    return tilt;
    // Time Complexity: O(N), we visit all nodes once
    // Space Complexity: O(H)
    
    function computeSum(root) {
        if (!root) return 0;
        let leftSum = computeSum(root.left);
        let rightSum = computeSum(root.right);
        tilt += Math.abs(leftSum - rightSum);
        return root.val + leftSum + rightSum;
    }
};