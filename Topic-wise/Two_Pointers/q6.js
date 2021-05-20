/*
Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/

/*
0 - red
1 - white
2 - blue

If we place all reds to the front and blues to the end, whites will be automatically
placed in the middle.

We keep two pointers: idx1 and idx2.
idx1 is where the next 0 will go into and idx2 is where the next 2 will go into.
We will start iterating through the array from the beginning. When we encounter 0, we will
swap with idx1. When we encounter 2, we will swap with idx2.

As a result,
[0...idx1-1] consists of 0s
[idx1...idx2] consists of 1s
[idx2+1...end] consists of 2s
*/
var sortColors = function (nums) {
  if (nums === null || nums.length === 0) {
    return;
  }
  let idx1 = 0,
    idx2 = nums.length - 1;
  for (let i = 0; i <= idx2; i++) {
    if (nums[i] === 0) {
      swap(nums, idx1, i);
      idx1++;
    } else if (nums[i] === 2) {
      swap(nums, i, idx2);
      idx2--;
      // we want to check on the swapped element because
      // it could be 2
      i--;
    }
  }
  // T.C: O(N)
  // S.C: O(1)
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
