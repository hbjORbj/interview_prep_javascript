/*
Given a sorted array that can contain duplicates, find the first occurrence of the target element. 

Qs to ask:
1. Can the input array contain negative numbers?
- Yes.
2. When the input array is empty, what should I return?
- Return -1.
3. Should I return the index of the first occurrence?
- Yes.
*/
function firstOccurrenceOfTarget(nums, target) {
    let left = 0, right = nums.length-1, mid;
    while (left <= right) {
        mid = Math.floor((left+right) / 2);
        if (nums[mid] > target || (mid > 0 && nums[mid] == target && nums[mid-1] == target)) {
            right = mid-1;
        } else if (nums[mid] < target) {
            left = mid+1;
        } else {
            return mid;
        }
    }
    return -1;
}

/*
Test Cases:
[1,2,2,2,3,4], 2 => 1
[], 1 => -1
[1], 1 => 0
[1,1], 1 => 0

Idea:
Since the array is sorted, I will use binary search to find the first occurrence.
I will find the median and if it is less than target, I search the right half, if it is greater than target,
I search the left half, if it is equal to target, I should return its index. But, since it should be the first occurrence,
we should add a condition to check. If the current number is equal to target and the previous number is also equal to target,
we should search the left half.

Time Complexity: O(log(n))
Space Complexity: O(1)
*/