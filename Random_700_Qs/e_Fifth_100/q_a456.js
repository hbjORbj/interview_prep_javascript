/*
Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found.

If not, return the index where it would be if it were inserted in order.
*/

var searchInsert = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let low = 0,
    high = nums.length - 1;
  let mid = 0;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return nums[mid] < target ? mid + 1 : mid;
  // if target is not found,
  // mid is the index of a number nearest to target
  // if target > nums[mid] we insert in the next index
  // if target < nums[mid] we insert in the current index
  // T.C: O(log(N))
  // S.C: O(1)
};
