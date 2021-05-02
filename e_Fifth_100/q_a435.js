/*
Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

var rotate = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return;
  }
  k = k % nums.length;
  if (k === 0) {
    return;
  }
  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  // T.C: O(N)
  // S.C: O(1)
};

const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++, end--;
  }
};

/*
Solution:
1. Reverse the entire array.
2. Reverse the first k elements.
3. Reverse the rest.
*/
