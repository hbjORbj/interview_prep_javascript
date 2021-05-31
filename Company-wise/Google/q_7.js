/*
Wiggle Sort

Given an integer array nums, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

You may assume the input array always has a valid answer.
*/

var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length - 1; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }
  // T.C: O(nlog(n))
  // S.C: O(1)
};

var wiggleSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (
      (i % 2 === 0 && nums[i] > nums[i + 1]) ||
      (i % 2 === 1 && nums[i] < nums[i + 1])
    ) {
      swap(nums, i, i + 1);
    }
  }
  // T.C: O(N)
  // S.C: O(1)
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
