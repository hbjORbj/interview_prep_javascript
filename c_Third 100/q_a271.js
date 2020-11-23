/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
*/

var maxProduct = function(nums) {
    if (nums.length == 0) return 0;
    let max = nums[0], maxSoFar = nums[0], minSoFar = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let tempMaxSoFar = Math.max(nums[i], maxSoFar * nums[i], minSoFar * nums[i]);
        let tempMinSoFar = Math.min(nums[i], maxSoFar * nums[i], minSoFar * nums[i]);
        maxSoFar = tempMaxSoFar;
        minSoFar = tempMinSoFar;
        max = Math.max(max, maxSoFar);
    }
    return max;
};

// maxSoFar = possible max product so far
// minSoFar = possible min product so far

// There are three cases for maximum subarray product at any position:
// 1. cur will be picked if maxSoFar is zero or negative and cur is positive OR maxSoFar is positive and cur is negative
// 2. maxSoFar * cur will be picked if maxSoFar is positive and cur is positive
// 3. minSoFar * cur will be picked if cur is negative and there has already been a single negative before and therefore minSoFar is also negative