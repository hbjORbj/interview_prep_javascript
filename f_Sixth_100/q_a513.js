/*
Given an array with all numbers in [1,2,..,n] except one number, find the missing number.

Qs:
1. Is the array sorted?
- No.
2. Are there duplicates?
- No.
*/

/*
Solution

sum1 = Get the sum of 1 to N
sum2 = Get the sum of given array
sum1 - sum2 = missing number
*/
const findMissingNumber = (nums) => {
  let N = nums.length + 1;
  let sum = (N * (1 + N)) / 2;
  let sumOfArr = nums.reduce((acc, cur) => acc + cur);
  return sum - sumOfArr;
};

console.log(findMissingNumber([1, 2, 5, 4]));
console.log(findMissingNumber([7, 3, 5, 4, 1, 2]));

/*
Solution

xor1 = Get the XOR of every number from 1 to N
xor2 = Get the XOR of every number in given array

Get the XOR of these two XORs = missing number

This logic is possible because same number XOR same number is zero
e.g., 7 ^ 7 = 0
e.g., 12 ^ 12 = 0

Every number from 1 to N except one number and every number in given array match and therefore result in 0 when we get XOR.
Therefore, we are left with the missing number.
*/

const findMissingNumber2 = (nums) => {
  let N = nums.length + 1;
  let xor1 = 0,
    xor2 = 0;
  for (let i = 1; i <= N; i++) {
    xor1 = i ^ xor1;
  }
  for (let i = 0; i < nums.length; i++) {
    xor2 = nums[i] ^ xor2;
  }
  return xor1 ^ xor2;
};

console.log(findMissingNumber2([1, 2, 5, 4]));
console.log(findMissingNumber2([7, 3, 5, 4, 1, 2]));
