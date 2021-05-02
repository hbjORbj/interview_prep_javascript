/*
Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times.

For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.
*/

var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > nums[nums.length - 1]) {
      // we're in first subarray
      low = mid + 1;
    } else {
      if (
        (mid === 0 || nums[mid - 1] > nums[mid]) &&
        (mid === nums.length - 1 || nums[mid + 1] > nums[mid])
      ) {
        return nums[mid];
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
  // T.C: O(log(N))
  // S.C: O(1)
};

/*
Solution

There are two sorted subarrays. 

We need to find i where arr[i-1] > arr[i] and arr[i+1] > arr[i] because this is the start of the second subarray and therefore the minimum element.

if we are in first subarray
    search right
else
    if arr[i-1] > arr[i] and arr[i+1] > arr[i]
        return arr[i]
    else search left


p.s. all elements of the first subarray are greater than any element in the second subarray.
*/
