/*
Number of Longest Increasing Subsequence

Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing.
*/

var findNumberOfLIS = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  // dp[i] is the length of longest increasing subsequence ending at index i
  let dp = new Array(nums.length);
  // freq[i] is the number of LISs ending at index i
  let freq = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    // Obtain length of LISs ending at i
    let lenOfLIS = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        lenOfLIS = Math.max(lenOfLIS, dp[j] + 1);
      }
    }

    // Obtain number of LISs ending at i
    let freqAtI = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[j] + 1 === lenOfLIS) {
        freqAtI += freq[j];
      }
    }

    // Record them to arrays
    dp[i] = lenOfLIS;
    freq[i] = freqAtI === 0 ? 1 : freqAtI;
  }

  // Obtain the length of LIS out of all possible increasing sequences
  let maxLen = Math.max(...dp);

  // Obtain the total number of LISs
  let maxFreq = 0;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === maxLen) {
      maxFreq += freq[i];
    }
  }
  return maxFreq;
  // T.C: O(N^2)
  // S.C: O(N)
};
