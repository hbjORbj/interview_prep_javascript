/*
Subarray Sum Equals K

Given an array of integers nums and an integer k,

return the total number of continuous subarrays whose sum equals to k.
*/

/*
Solution: Prefix sum 

Prefix sum at j - Prefix sum at i = x means that 
arr[i+1...j] has a subarray sum of x.

Hence, 
Prefix sum at j - Prefix sum at i = k 
Prefix sum at j - k = Prefix sum at i

Hence, we'll iterate through given array and at each index we check if (prefix sum at current index - k) exists in hash table.
If so, we get the number of subarrays with such prefix sum and add it to our counter.

To do this operation successfully, at each index we should record the current prefix sum to a Hash Table with a value of 1.
1 represents the number of subarray with such prefix sum. If the Hash table already has the prefix sum, we increment
the value by 1.

After iteration is done, Return counter.
*/

var subarraySum = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let m = new Map(),
    prefixSum = 0,
    count = 0;
  // there could be a subarray[0...j] with a sum of k
  m.set(prefixSum, 1);
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (m.has(prefixSum - k)) {
      count += m.get(prefixSum - k);
    }
    m.set(prefixSum, m.get(prefixSum) + 1 || 1);
  }
  return count;
  // T.C: O(N)
  // S.C: O(N)
};
