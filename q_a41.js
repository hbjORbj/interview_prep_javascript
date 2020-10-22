/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

// Kadane's Algorithm
var maxSubArray = function(nums) {
    if (!nums.length) return 0;
    let subArrSum = nums[0], maxSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        subArrSum = Math.max(nums[i], subArrSum + nums[i])
        maxSum = Math.max(maxSum, subArrSum);
    }
    return maxSum;
};

/*
Test Cases:
[] => 0
[2] => 2

1. Initialise two variables, subArrSum and maxSum, both to the first element of input, because the first element is the only subarray sum and maximum sum we can have at this point.
2. Loop over the array from second element and compare the element with the subarray sum + the element. So, we are basically deciding whether to include this element in our subarray sum we have had so far or start a new subarray sum from this element. We choose the greater one since we want to maximise our sum.
3. For every iteration, we update our return variable to store the maximum subarry sum.
4. Return the maximum sum.

Time Complexity: O(n)
Space Complexity: O(1)
*/