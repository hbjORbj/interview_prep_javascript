/*
Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may not use the same element twice.

You can return the answer in any order.
*/

/*
Qs
1. Can there be negative integers?
- Yes.
2. Can there be duplicates?
- Yes.
3. What to return if there is no answer?
- Return an empty array.
*/

var twoSum = function (nums, target) {
  if (nums == null) return null;
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (m.has(complement)) {
      return [m.get(complement), i];
    } else {
      m.set(nums[i], i);
    }
  }
  return [];
};

/*
Test cases:
[2,7,3,9], 3 => []
[2,7,3,9], 5 => [0, 2]
[-2,7,3,9], 5 => [0, 1]
*/

console.log(twoSum([2, 7, 3, 9], 3));
console.log(twoSum([2, 7, 3, 9], 5));
console.log(twoSum([-2, 7, 3, 9], 5));
