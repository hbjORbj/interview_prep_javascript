/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

var sortedArrayToBST = function(nums) {
    return createBST(nums);
    function createBST(nums) {
        if (nums.length == 0) return null;
        let mid = Math.floor(nums.length / 2);
        let root = new TreeNode(nums[mid]);
        root.left = createBST(nums.slice(0,mid));
        root.right = createBST(nums.slice(mid+1));
        return root;
    }
    // Time Complexity: O(N), we visit every element exactly once
    // Space Complexity: O(N), call stack can go as deep as number of elements
};