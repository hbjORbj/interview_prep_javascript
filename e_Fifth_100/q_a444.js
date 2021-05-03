/*
Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

var productExceptSelf = function (nums) {
  let res = new Array(nums.length);
  let productFromLeft = 1;
  let productFromRight = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = productFromLeft;
    productFromLeft *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= productFromRight;
    productFromRight *= nums[i];
  }
  return res;
  // T.C: O(N)
  // S.C: O(N)
};

/*
Solution

1. We will loop through the array once from the beginning and once from the end
2. each number in result array is as follows: result[i] = product of nums[0..i-1] * product of nums[i+1...length-1]. We can achieve this by keeping track of cumulative product starting at the beginning of the array and starting at the end of the array.
*/
