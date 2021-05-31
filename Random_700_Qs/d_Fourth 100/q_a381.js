/*
Given an array, reverse the order of its elements.

For example, [3,5,2,5,2,3,9] -> [9,3,2,5,2,5,3]

Qs.
1. Should I reverse the order in-place?
- Yes.
*/

var reverseArray = function (arr) {
  if (arr == null) return null;
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++, end--;
  }
  return arr;
};

/*
Time Complexity: O(N)
Space Complexity: O(1)

null => null
[] => []
[1] => [1]
*/

console.log(reverseArray(null));
console.log(reverseArray([]));
console.log(reverseArray([1]));
console.log(reverseArray([3, 5, 2, 5, 2, 3, 9]));
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([9, 3, 2, 1]));
