/*
Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 

of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

/*
We are given only positive integers so as the window size of subarray gets bigger,
the subarray sum gets bigger.

We keep two pointers: `start` and `end`, which indicate the ends of subarray.
We start expanding `end` (add element to sum).
While subarray sum is greater than or equal target, we compare the current window size and 
that in global variable and store the smaller size and advance `start` pointer and keep
updating the minimum size.
We repeat this until the end of array.
*/
var minSubArrayLen = function (target, nums) {
  let start = 0,
    sum = 0,
    minSize = Infinity;
  for (let end = 0; end < nums.length; end++) {
    // Add current element
    sum += nums[end];

    // Get the minimum window size while subarray
    // sum is greater than or equal to target
    while (sum >= target) {
      minSize = Math.min(minSize, end - start + 1);
      sum -= nums[start++];
    }
  }
  return minSize === Infinity ? 0 : minSize;
  // T.C: O(N)
  // S.C: O(1)
};
