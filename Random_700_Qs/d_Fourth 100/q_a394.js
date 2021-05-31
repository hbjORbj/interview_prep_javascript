/*
Given an array of integers that can be both +ve and -ve, find the contiguous subarray with the largest sum.

e.g, [1,2,-1,2,-3,2,-5] -> the first 4 elements have the largest sum.
*/

/*
Qs.
1. How do you want the output?
- Return the maximum sum.
2. Does an empty array count as a subarray?
- Yes.
*/

// Kadane's Algorithm
var maxSubArray = function (nums) {
  if (nums.length == 0) return 0;
  let subArrSum = nums[0],
    maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    subArrSum = Math.max(subArrSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, subArrSum);
  }
  return maxSum;
};

/*
1. Initialise two variables, subArrSum and maxSum, both to the first element of input , because the first element is the only subarray sum and maximum sum we can have at this point.
2. Loop over the array from second element and compare the element with the subarray sum + the element. 
So, we are basically deciding whether to include this element in our subarray sum we have had so far or start a new subarray sum from this element. 
We choose the greater one since we want to maximise our sum.
3. For every iteration, we update our return variable to store the maximum subarry sum.
4. Return the return varianle.
nd
Time Complexity: O(N), we scan through the entire array once
Space Complexity: O(1), only primitive variables are used
*/

console.log(maxSubArray([1]));
console.log(maxSubArray([2, 1]));
console.log(maxSubArray([1, 2, -1, 2, -3, 2, -5]));
