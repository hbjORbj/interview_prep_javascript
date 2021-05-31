/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note:
- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            idx++;
        }
    }
    // Scan through the array and every time we encounter a non-zero, we swap it with the number
    // at position "idx". "idx" represents the index the next non-zero should come in.
    // Because we've moved all non-zeros to the front, we have all zeros at the end now.
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};