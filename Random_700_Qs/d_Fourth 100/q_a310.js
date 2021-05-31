/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
*/

var productExceptSelf = function(nums) {
    let prefixProduct = [], suffixProduct = [];
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        prefixProduct[i] = (i > 0 ? prefixProduct[i-1] : 1) * nums[i];
    }
    for (let i = nums.length-1; i >= 0; i--) {
        suffixProduct[i] = (i < nums.length-1 ? suffixProduct[i+1] : 1) * nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        output[i] = (i > 0 ? prefixProduct[i-1] : 1) * (i < nums.length-1 ? suffixProduct[i+1] : 1);
    }
    return output;
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};
/*
output[i] is the the product of prefix product and suffix product that excludes itself.
In other words, output[i] = prefixProduct[i-1] * suffixProduct[i+1].
prefixProduct[i] is the cumulative product of numbers including itself starting from the beginning.
suffixProduct[i] is the cumulative product of numbers including itself starting from the end.
*/

var productExceptSelf = function(nums) {
    if (nums.length <= 1) return nums;
    let output = [];
    
    let prefixProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = prefixProduct;
        prefixProduct *= nums[i];
    }
    
    let suffixProduct = 1;
    for (let i = nums.length-1; i >= 0; i--) {
        output[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    return output;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};
/*
Mutate the input array.
We will do two passes: one from the beginning to the end and one from the end to the beginning.
After the first scan,
nums[i] must be the product of all elements to its left.
After the second scan,
nums[i] must be the product of all elements to its left and all elements to its right.
*/

