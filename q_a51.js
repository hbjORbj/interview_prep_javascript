/*
Given a sorted array that can contain duplicates, find the last occurrence of the target element. 

Qs to ask:
1. Can the input array contain negative numbers?
- Yes.
2. When the input array is empty, what should I return?
- Return -1.
3. Should I return the index of the first occurrence?
- Yes.
*/
function lastOccurrenceOfTarget(nums, target) {
    let left = 0, right = nums.length-1, mid;
    while (left <= right) {
        mid = Math.floor((left+right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target || (nums[mid] == target && nums[mid+1] == target && mid < nums.length-1)) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

/*
Test Cases:
[-1,3,5,8,8], 8 => 4
[], 8 => -1
[8], 8 => 0
[8, 8], 8 => 1

Idea:
I will use binary search since the array is sorted.
If the median is greater than target, search the left half,
if the median is less than target, search the right half,
if the median is equal to target, return the index.
But, we want the last occurrence, so we need to add a condition to check.
If the median is equal to target but its next element is also equal to target, then
we check the right half.

Time Complexity: O(log(n))
Space Complexity: O(1)
*/