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
