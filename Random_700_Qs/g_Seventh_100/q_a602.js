/*
Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

var sortedArrayToBST = function (nums) {
  return buildTree(nums, 0, nums.length - 1);
};

const buildTree = (nums, start, end) => {
  if (start > end) {
    return null;
  }
  let mid = start + Math.floor((end - start) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = buildTree(nums, start, mid - 1);
  root.right = buildTree(nums, mid + 1, end);
  return root;
};
