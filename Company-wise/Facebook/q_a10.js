/*
Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/*
We have to return an array so we will create a result array.
res[i]  = the product of elements on the left of i and elements on the right of i
        = left[i-1] * right[i+1], 
        where left[i] is the product of elements from 0 to i and right[i] is the product of elements from end of array to i
We will fill these two arrays, left[] and right[], and then iterate through result array and fill it with correct products. 
*/
var productExceptSelf = function (nums) {
  if (nums === null || nums.length <= 1) {
    return [];
  }
  let n = nums.length;
  let left = new Array(n),
    right = new Array(n),
    res = new Array(n);
  for (let i = 0; i < n; i++) {
    left[i] = i > 0 ? nums[i] * left[i - 1] : nums[i];
  }
  for (let i = n - 1; i >= 0; i--) {
    right[i] = i < n - 1 ? nums[i] * right[i + 1] : nums[i];
  }
  for (let i = 1; i < n - 1; i++) {
    res[i] = left[i - 1] * right[i + 1];
  }
  res[0] = right[1];
  res[n - 1] = left[n - 2];
  return res;
  // T.C: O(N)
  // S.C: O(N), even though we assume that the output array is not counted as extra space,
  // we use two extra arrays of length n
};

/*
Add optimisation to the solution above.

Instead of using two arrays left[] and right[], we will keep track of product from left and product from right.
Hence, at each i, res[i] = productFromLeft * productFromRight. Since we can't have access to productFromLeft and
productFromRight at the same time without storing them somewhere, we will set res[i] to productFromLeft when
iterating from the start and we will multiply productFromRight to each res[i] as we iterate through from the end.
*/

var productExceptSelf = function (nums) {
  if (nums === null || nums.length <= 1) {
    return [];
  }
  let productFromLeft = 1,
    productFromRight = 1;
  let res = new Array(nums.length);
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
  // S.C: O(1), assuming that we do not count the output array as extra space
};
