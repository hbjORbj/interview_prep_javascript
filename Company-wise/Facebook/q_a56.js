/*
Given an integer array nums, handle multiple queries of the following type:
1. Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

Implement the NumArray class:
- NumArray(int[] nums) Initializes the object with the integer array nums.
- int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
*/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefixSumArr = new Array(nums.length);
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    this.prefixSumArr[i] = prefixSum;
  }
  // T.C: O(N)
  // S.C: O(N)
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left < 0 || right > this.prefixSumArr.length - 1) {
    return null;
  }
  return left > 0
    ? this.prefixSumArr[right] - this.prefixSumArr[left - 1]
    : this.prefixSumArr[right];
  // T.C: O(1)
  // S.C: O(1)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
