/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

var sortedArrayToBST = function(nums) {
    function constructBST(nums) {
        // No more available value to construct a node with
        if (nums.length == 0) return null; 
        let mid = Math.floor((nums.length-1) / 2);
        let root = new TreeNode(nums[mid]);
        let leftSub = constructBST(nums.slice(0,mid));
        let rightSub = constructBST(nums.slice(mid+1));
        root.left = leftSub;
        root.right = rightSub;
        return root;
    }

    return constructBST(nums);
    // Time Complexity: O(N), we touch every node once
    // Space Complexity: O(H), call stack can go as deep as height
};