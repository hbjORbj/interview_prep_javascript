/*
Given an unsorted array of integers, find the length of longest increasing subsequence.
*/

var lengthOfLIS = function(nums) {
    if (nums.length == 0) return 0;
    let dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
    // Time Complexity: O(n^2)
    // Space Complexity: O(n)
};

// dp[i] represents the length of longest increasing subsequence in nums[0..i] that includes nums[i]
// I will initialise every element in dp with 1 because every number is a subsequence of length 1 itself
// We scan through the array and for each number, we scan through all elements in its left and if we find a smaller number, 
// it means that our current number can be chained to this smaller number's subsequence. So, every time we find a smaller number,
// we update dp[i] to the maximum length.