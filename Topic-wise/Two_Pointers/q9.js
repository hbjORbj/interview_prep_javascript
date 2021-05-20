/*
Subarray Product Less Than K

Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.
*/

/*
The key to this problem:

Subarray size (right - left + 1) gives the number of new sub-arrays generated upon adding a new element to the subarray.

For example, 
What is the total number of sub-arrays of [10,4,2,1]?

start: []
add 10: [10] -> +1 -> [10]
add 4: [10,4] -> +2 -> [4], [10,4]
add 2: [10,4,2] -> +3 -> [2], [4,2], [10,4,2]
add 1: [10,4,2,1] -> +4 -> [1], [2,1], [4,2,1], [10,4,2,1]

Answer: 10

To solve this question, we simply add an extra condition:
is the subarray product less than K?
*/
var numSubarrayProductLessThanK = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  if (k <= 1) return 0;
  let start = 0,
    product = 1,
    count = 0;
  for (let end = 0; end < nums.length; end++) {
    product *= nums[end];
    // ensure subarray product is less than k
    while (product >= k && start <= end) {
      product /= nums[start++];
    }
    count += end - start + 1;
  }
  return count;
  // T.C: O(N)
  // S.C: O(1)
};
