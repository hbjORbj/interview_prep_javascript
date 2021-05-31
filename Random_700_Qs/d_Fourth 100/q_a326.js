/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

var maxSubArray = function(nums) {
    let subArrSum = nums[0], maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // choosing between starting a new subarray and adding a number to current subarray 
        subArrSum = Math.max(subArrSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, subArrSum);
    }
    return maxSum;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};
