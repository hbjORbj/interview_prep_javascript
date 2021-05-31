/*
Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/

var missingNumber = function (nums) {
  // total number of elements
  let N = nums.length;
  let numOfElements = N + 1;
  let sumFromZeroToN = (N / 2) * numOfElements;
  let arrSum = nums.reduce((acc, cur) => acc + cur);
  return sumFromZeroToN - arrSum;
  // T.C: O(N)
  // S.C: O(1)
};
