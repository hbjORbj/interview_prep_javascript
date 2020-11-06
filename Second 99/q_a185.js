/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
*/

var checkPossibility = function(nums) {
    let elemToModify = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            if (nums[i-1] > nums[i+1]) { 
                // because otherwise, we need to modify 2 elements
                // nums[i] and nums[i-1]
                // it is better to modify nums[i+1] instead
                nums[i+1] = nums[i];
            } else nums[i] = nums[i+1];
            elemToModify++;
        }
        if (elemToModify > 1) return false;
    }     
    return true;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};
