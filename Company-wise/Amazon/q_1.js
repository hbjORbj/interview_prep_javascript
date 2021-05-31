/*
Next Permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.
*/

/*
I will consider given array as a number.

If given array is in descending order, there is no greater number.
Hence, we reverse the array and return.

1. We iterate through given array from the back. We look for the first dip because that is where we can swap numbers and make our number greater.
2. However, simply swapping adjacent numbers when a dip is found isn't sufficient.
ex) Given 1 2 6 8 7, next greater number isn't 1 2 8 6 7. It's 1 2 7 6 8. 
3. We consider the first dip as the pivot. Then, we iterate again from the back. The first number greater than
pivot will be swapped with the pivot. This logic works because all numbers up to the pivot (the first dip) are in descending order.
4. Then, we reverse arr[pivot+1...end] because we want to change these numbers from descending order to ascending order.
This allows us to get the next greater number. The swap doesn't change the descending order of arr[pivot+1...end].
*/
var nextPermutation = function (nums) {
  let pivot = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      pivot = i - 1;
      break;
    }
  }
  if (pivot === -1) {
    // array is in descending order
    nums.reverse();
    return;
  }
  for (let i = nums.length - 1; i > pivot; i--) {
    if (nums[i] > nums[pivot]) {
      swap(nums, i, pivot);
      break;
    }
  }
  for (let i = pivot + 1, j = nums.length - 1; i < j; i++, j--) {
    swap(nums, i, j);
  }
  // T.C: O(N)
  // S.C: O(1)
};

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
