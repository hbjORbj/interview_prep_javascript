/*
Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order,

return an array of the squares of each number sorted in non-decreasing order.
*/

/*
We will create a new array and fill it so that squared numbers are in
descending order. We will then reverse it.

The potential greatest number is the left-most number or the right-most number.
We compare the squares of the two numbers and push the greater number into the result
array.
*/
var sortedSquares = function (nums) {
  if (nums === null || nums.length === 0) {
    return nums;
  }
  let low = 0,
    high = nums.length - 1;
  let res = [];
  while (low <= high) {
    if (nums[low] ** 2 > nums[high] ** 2) {
      res.push(nums[low] ** 2);
      low++;
    } else {
      res.push(nums[high] ** 2);
      high--;
    }
  }
  res.reverse();
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
