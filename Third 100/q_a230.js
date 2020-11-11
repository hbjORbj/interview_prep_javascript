/*
Given a sorted array of n elements, possibly with duplicates, find the number of occurrences of the target element.

ex) 
Input: arr = [4, 4, 8, 8, 8, 15, 16, 23, 23, 42], target = 8
Output: 3
*/

function findOccurrencesOfTarget(nums, target) {
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
    if (firstIdx == -1) return 0; // target does not exist in the array

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
    return lastIdx - firstIdx + 1;
}
// Find the position of first occurrence of target
// Find the position of last occurrence of target
// Their difference + 1 is the total number of occurrences of target

// Conditions for first occurrence:
// 1. previous number should be less or index should be the first index

// Conditions for last occurrence:
// 1. next number should be larger or index should be the last index
console.log(findOccurrencesOfTarget([4, 4, 8, 8, 8, 15, 16, 23, 23, 42], 8)); // => 3
console.log(findOccurrencesOfTarget([3, 5, 5, 5, 5, 7, 8, 8], 6)); // => 0
console.log(findOccurrencesOfTarget([3, 5, 5, 5, 5, 7, 8, 8], 5)); // => 4