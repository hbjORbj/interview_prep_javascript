/*
Two Sum II - Input array is sorted

Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

You may assume that each input would have exactly one solution and you may not use the same element twice.
*/

var twoSum = function (numbers, target) {
  let low = 0,
    high = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum > target) {
      high--;
    } else if (sum < target) {
      low++;
    } else {
      return [low + 1, high + 1];
    }
  }
  return [-1, -1];
  // Two pointer
  // T.C: O(N)
  // S.C: O(1)
};
