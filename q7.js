/*
You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7,8,9] might become [4,5,6,7,8,9,0,1,2]).

If target is found in the array return its index, otherwise, return -1.
*/

function findTarget(nums, target) {
    let l = 0, r = nums.length-1, mid;
    while (l <= r) {
        mid = Math.floor((l+r) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) { 
            if (nums[mid] > nums[r]) l = mid+1;
            else if (target > nums[r]) r = mid-1;
            else l = mid+1;
        } else { 
            if (nums[mid] < nums[r]) r = mid-1;
            else if (target < nums[l]) l = mid+1;
            else r = mid-1;
        }
    }
    return -1;
}

/*
Idea - Binary Search:

Test Cases: ([4,5,6,7,8,9,0,1,2], 4) => 0

One thing to remember is that we will always have two sorted subarrays. If the median is greater than the last value of the window, we are in the first subarray, 
else we are in the second sub array. The first subarray's values are always greater than the second subarray's values. 

1. If the median is less than target: 
if we are in the first subarray, we search right half.
if we are in the second subarray, we compare the target and the last value of the window,
and if target is greater we search the left half, else we search the right half.

2. If the median is greater than target:
if we are in the first subarray, we compare the target and the first value of the window,
and if target is less we search the right half, else we search the left half.
if we are in the second subarray, we search left half.
*/