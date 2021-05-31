/*
Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

/*
ex) [0,2,0,1,3] => [2,1,3,0,0]

Solution:
If we move all non-zeroes to the front, we will have all zeroes at the end.
Hence, we will iterate through given array from the start. Every time a non-zero is encountered,
we will swap it with element at `swapIdx` and increment `swapIdx`. `swapIdx` will be initialised to zero and
it is the index the next non-zero will go into. Once iteration is done, we will have non-zeroes at the front
with relative order retained and all zeroes at the end.
*/

function moveZeroes(nums) {
  if (nums === null || nums.length === 0) {
    return nums;
  }
  let swapIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, swapIdx, i);
      swapIdx++;
    }
  }
  // T.C: O(N)
  // S.C: O(1)
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
