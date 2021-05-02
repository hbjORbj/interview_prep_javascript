/*
Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
*/

var search = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  // if target is less than or equal to the greatest value of second subarray
  // we search the second subarray
  // else we search the first subarray
  let searchFirstSubarr = true;
  if (nums[nums.length - 1] >= target) {
    searchFirstSubarr = false;
  }

  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > nums[nums.length - 1]) {
      // we are in first subarray
      if (searchFirstSubarr === false) {
        low = mid + 1; // try to move to second subarray
        continue;
      }
    } else {
      // we are in second subarray
      if (searchFirstSubarr === true) {
        high = mid - 1; // try to move to first subarray
        continue;
      }
    }
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
  // T.C: O(log(N))
  // S.C: O(1)
};

/*
There are two sorted subarrays.

1. We need to figure out which sorted subarray we should search through for target
2. Then, use general binary search method to find the target with an additional condition: 
    if we are in a wrong subarray, try to move to the other subarray.

p.s. All elements in the first sorted subarray are greater than any element
in the second sorted subarray.
*/
