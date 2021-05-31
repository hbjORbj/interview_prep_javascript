/*
Subarray Sums

A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

Your task is to write a function that takes as input an array and outputs the sum of all of its subarrays.
*/

/*
The possible number of subarrays including i-th element is (n-i)*i + (n-i) where i is index in array and n is the length of array.
Why? 
- we have n-i subarrays having nums[i] as the first element.
- we have (n-i)*i subarrays having nums[i] as a not-first element. 
At i, we can open n-i new subarrays => (n-i)
and,
nums[i] appears in n-i subarrays of each preceding number => (n-i) * i

Hence, for each number in given array, 
we will multiply its value with the number of subarrays it can possibly appear and add it to sum.
*/

const allPossibleSubarraySum = (nums) => {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let numOfSubarrs = i * (nums.length - i) + (nums.length - i);
    sum += nums[i] * numOfSubarrs;
  }
  return sum;
};

console.log(allPossibleSubarraySum([1, 2, 3]));
console.log(allPossibleSubarraySum([1, 2, 3, 4]));
