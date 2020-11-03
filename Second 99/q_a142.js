/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Qs:
1. Can there be negative numbers?
- Yes.
*/

function findIndices(nums, target) {
    let left = 0, right = nums.length-1, mid;
    let firstIdx = -1, lastIdx = -1;
    while (left <= right) {
        mid = left + Math.floor((right-left) / 2);
        if (nums[mid] == target) {
            if (mid == 0 || nums[mid-1] < nums[mid]) {
                firstIdx = mid; // found the first position of target
                break;
            }
            else right = mid - 1; // search the left half
        } else if (nums[mid] > target) { // search the left half
            right = mid - 1;
        } else { // search the right half
            left = mid + 1;
        }
    }

    left = 0, right = nums.length-1; // re-initialise variables
    while (left <= right) {
        mid = left + Math.floor((right-left) / 2);
        if (nums[mid] == target) {
            if (mid == nums.length-1 || nums[mid] < nums[mid+1]) {
                lastIdx = mid; // found the last position of target
                break;
            } else left = mid + 1; // search the right half
        } else if (nums[mid] > target) { // search the left half
            right = mid - 1;
        } else { // search the right half
            left = mid + 1;
        }
    }
    return [firstIdx, lastIdx];
}
// Time Complexity: O(log(n))
// Space Complexity: O(1)