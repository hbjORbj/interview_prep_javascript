/*
Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.
*/

var subarraySum = function (nums, k) {
  let count = 0;
  let cumSum = 0;
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    cumSum += nums[i];
    if (cumSum === k) {
      count += 1;
    }
    if (m.has(cumSum - k)) {
      count += m.get(cumSum - k);
    }
    m.set(cumSum, m.get(cumSum) + 1 || 1);
  }
  return count;
  // T.C: O(N)
  // S.C: O(N)
};

/*
We keep track of cumulative sum at each index

if cumulative sum at nums[j] - cumulative sum at nums[i] = k
    the subarray nums[i+1...j] has a sum of k
Therefore, at every index, we check if such index i exists and if it exists how many such indices there are.
Another edge case to consider is that the subarray nums[0...i] can have a sum of k    
*/
