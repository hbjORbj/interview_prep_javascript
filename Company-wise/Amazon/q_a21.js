/*
Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

Follow up: Your solution should run in O(log n) time and O(1) space.
*/

var singleNonDuplicate = function (nums) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (mid > 0 && nums[mid - 1] === nums[mid]) {
      let dist = mid - 1; // # of elements between 0 and mid-2 inclusive
      dist % 2 === 0 ? (low = mid + 1) : (high = mid - 2);
    } else if (mid < nums.length - 1 && nums[mid] === nums[mid + 1]) {
      let dist = nums.length - (mid + 2); // # of elements bewteen mid+2 and end of array inclusive
      dist % 2 === 0 ? (high = mid - 1) : (low = mid + 2);
    } else {
      return nums[mid];
    }
  }
  return -1; // should never be reached
  // T.C: O(log(N))
  // S.C: O(1)
};
