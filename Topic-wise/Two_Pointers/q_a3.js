/*
Two Sum II - Input array is sorted

Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

The tests are generated such that there is exactly one solution. You may not use the same element twice.
*/

/*
We use two pointers `low` and `high` which indicate the start index and end index
of window (subarray). They are initialised to 0 and numbers.length-1, respectively.
We get the sum of the values at two indices.

If sum > target:
    move `high` left by 1
Else if sum < target:
    move `low` right by 1
Else:
    return [low, high]
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
      // 1-indexed
      return [low + 1, high + 1];
    }
  }
  return [-1, -1];
  // T.C: O(N)
  // S.C: O(1)
};
