/*
Continuous Subarray Sum

Given an integer array nums and an integer k,

return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.

An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
*/

var checkSubarraySum = function (nums, k) {
  let m = new Map();
  let cumSum = 0;
  for (let i = 0; i < nums.length; i++) {
    cumSum += nums[i];
    if (cumSum % k === 0 || cumSum === 0) {
      if (i + 1 >= 2) {
        return true;
      }
    }
    if (m.has(cumSum % k)) {
      let subarrLen = i - (m.get(cumSum % k) + 1) + 1;
      if (subarrLen >= 2) {
        return true;
      }
    } else {
      m.set(cumSum % k, i);
    }
  }
  return false;
  // T.C: O(N)
  // S.C: O(N)
};

/*
Conditions to consider:
    Subarray should be at least two or longer
    Zero is a multiple of k

Two general possible cases for specific subarray sum:

if cumulative sum at j == x
    sum of subarray[0...j] is x

if cumulative sum at j - cumulative sum at i == x
    sum of subarray[i+1...j] is x

For this particular problem, we have

if cumulative sum at j % k == 0
    sum of subarray[0...j] % k == 0

if cumulative sum at j % k == cumulative sum at i % k
    sum of subarray[i+1...j] % k == 0

So, at each index, we check if cumulative sum is zero or cumulative sum % k is zero.
Also, we check if cumulative sum % k exists in the map because that means there is a subarray whose sum is equal to zero or whose sum modulus k is zero.
*/
