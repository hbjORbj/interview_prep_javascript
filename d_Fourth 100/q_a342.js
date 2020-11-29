/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this duplicate number.
*/

var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]);
        if (nums[idx] > 0) nums[idx] *= -1;
        else return idx;
        // Time Complexity: O(N)
        // Space Complexity: O(1)
    }
    // For every integer we encounter, we will negate nums[integer].
    // If nums[integer] is already negative, that means integer is the duplicate number.
};