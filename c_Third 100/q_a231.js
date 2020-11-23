/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?
*/

// Time Complexity: O(log(n))
// Space Complexity: O(1)
var searchRange = function(nums, target) {
    // Find the first occurrence
   let left = 0, right = nums.length - 1, mid;
   let firstIdx = -1, lastIdx = -1;
   while (left <= right) {
       mid = left + Math.floor((right - left) / 2);
       if (nums[mid] == target) {
           if (mid == 0 || nums[mid-1] < nums[mid]) {
               firstIdx = mid;
               break;
           }
           else right = mid - 1;
       } else if (nums[mid] < target) {
           left = mid + 1;
       } else {
           right = mid - 1;
       }
   }
   if (firstIdx == -1) return [-1, -1]; // target does not exist in the array

   // Find the last occurrence
   left  = 0, right = nums.length - 1; // re-initialise
   while (left <= right) {
       mid = left + Math.floor((right - left) / 2);
       if (nums[mid] == target) {
           if (mid == nums.length-1 || nums[mid] < nums[mid+1]) {
               lastIdx = mid;
               break;
           }
           else left = mid + 1;
       } else if (nums[mid] < target) {
           left = mid + 1;
       } else {
           right = mid - 1;
       }
   }
   return [firstIdx, lastIdx];
};