/*
Given an array of integers where each element appears twice except one, find the element which appears once.
*/

/*
Solution

Get the XOR of every number in given array and we will be left with the one element that appears once only.
Every number occurring twice results in zero because x XOR x is zero.
*/
const findOneElement = (nums) => {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
  // T.C: O(N)
  // S.C: O(1)
};

console.log(findOneElement([3, 7, 3, 5, 5]));
