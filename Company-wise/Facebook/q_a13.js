/*
Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, 

find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

/*
Qs:
1. Is position 0-indexed?

Solution:
I will break down the question into two: finding first position and finding last position.
For the first sub-problem:
1. Use binary search to find the target number. In order to check if this is the first occurring target number,
we should compare it to its left element. If it is greater than left element or if left element doesn't exist,
it is the first occurring number. Else, we move left.

For the second sub-problem:
1. Use binary search to find the target number. In order to check if this is the last occurring target number,
we should compare it to its right element. If it is less than right element or if right element doesn't exist,
it is the last occurring number. Else, we move right.
*/

function firstAndLastPosition(arr, target) {
  if (arr === null || arr.length === 0) {
    return [-1, -1];
  }
  let firstPos = findPosition(arr, target, true);
  let lastPos = findPosition(arr, target, false);

  return [firstPos, lastPos];
  // T.C: O(log(N))
  // S.C: O(1)
}

function findPosition(arr, target, findFirst) {
  let pos = -1;
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      if (findFirst) {
        if (mid - 1 < 0 || arr[mid - 1] < arr[mid]) {
          pos = mid;
          break;
        } else {
          high = mid - 1;
        }
      } else {
        if (mid + 1 >= arr.length || arr[mid] < arr[mid + 1]) {
          pos = mid;
          break;
        } else {
          low = mid + 1;
        }
      }
    }
  }
  return pos;
}

console.log(firstAndLastPosition([1, 1, 2, 3, 3, 3, 3, 3, 4], 1)); // [0,1]
console.log(firstAndLastPosition([1, 1, 2, 3, 3, 3, 3, 3, 4], 3)); // [3,7]
console.log(firstAndLastPosition([1, 1, 2, 3, 3, 3, 3, 3, 4], 4)); // [8,8]
