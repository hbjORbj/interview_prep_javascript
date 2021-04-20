/*
Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to 0.

For example: [2,4,-2,1,-3,5,-3] --> [4,-2,1,-3]
*/

/*
Qs.
1. How do you want the output?
- Return the start and end indices of the subarray.
2. What if the array is empty or null?
- Return an empty array.
3. What if there are multiple subarrays?
- Return any one.
*/

var subArrZeroSum = function (arr) {
  if (arr == null || arr.length == 0) return [];
  let m = new Map();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      return [0, i];
    }
    if (m.has(sum)) {
      // here, complement of a sum is the sum itself
      return [m.get(sum) + 1, i];
    } else {
      m.set(sum, i);
    }
  }
  return [];
};

/*
Test cases:
[] -> []
null => []
[1] => []
[3,-6,3,9] -> [0,2]
[2,4,6,-10] -> [1,3]
1. Keep track of cumulative sum at each sum using HashMap.
2. If cumulative sum at index j - cumulative sum at index i is equal to zero, subarray [i+1...j] has a sum equal to zero.
At every index of array, check if there is a such index pair.
*/

console.log(subArrZeroSum([2, 4, -2, 1, -3, 5, -3]));
console.log(subArrZeroSum([3, -6, 3, 9]));
console.log(subArrZeroSum([7, 5, 10, -15]));
console.log(subArrZeroSum([1]));
console.log(subArrZeroSum([2, 4, 6, -10]));
