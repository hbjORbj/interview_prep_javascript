/*
Given an array nums of n integers where n > 1, 

return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
*/

var productExceptSelf = function(nums) {
    let res = [];
    let productL = 1, productR = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = productL;
        productL *= nums[i];
    }
    for (let i = nums.length-1; i >= 0; i--) {
        res[i] *= productR;
        productR *= nums[i];
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};