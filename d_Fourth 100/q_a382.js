/*
Given a sorted array of integers, find two numbers in the array that sum to a given integer target.

For example, 

if a = [1,2,3,5,6,7] and target = 11, the answer will be 5 and 6
*/

/*
Qs
1. Can the array have duplicates?
- Yes.
2. What to return if there is no result?
- return null.
3. How do you want the output?
- Return it as a pair of numbers.
*/

var findTwoSum = function (arr, target) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum == target) {
      return [arr[start], arr[end]];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return null;
};

/*
1. Set two pointers, one to the start of the array and the other to the end.

2. If the sum of the two numbers is greater than target, move the end pointer inward by one.
If the sum is less than target, move the start pointer outward by one.
If the sum is equal to target, return the numbers.
*/

console.log(findTwoSum([1, 2, 3, 5, 6, 7], 11));
console.log(findTwoSum([1, 2, 3, 5, 6, 7], 4));
console.log(findTwoSum([1, 2, 3, 5, 6, 7], 13));
