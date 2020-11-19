/*
Given an array of positive integers and a value K, find a subsequence having maximum sum under K.

Return the maximum Sum.
*/

function maxSubsequenceSum (nums, k) {
    let dp = new Array(nums.length + 1).fill(0).map(() => new Array(k + 1));
    // dp[i][j] represents the maximum sum of first i elements under j
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0;
                continue;
            }
            // At a given moment, we need to make two choices: take the i-th element and include it into our subsequence
            // OR we ignore the element
            if (nums[i-1] > j) { // we ignore the element because i-th element itself is already bigger than j
                dp[i][j] = dp[i-1][j];
            } else { 
                // there might be a subsequence whose sum is greater than dp[i-1][j] so we include it into our subsequence, compute the sum
                // and compare with dp[i-1][j] which represents the current max sum under j
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-nums[i-1]] + nums[i-1]);
                // we add current element to dp[i-1][j-nums[i-1]] because j-nums[i-1] guarantees that the sum is under j
            }
        }
    }
    return dp[nums.length][k];
    // Time Complexity: O(N * K)
    // Space Complexity: O(N * K)
}
// dp[i][j] is the maximum sum of first i elements that is less than or equal to j
console.log(maxSubsequenceSum([1,2,3,4,5,6,7,16], 15)); // => 15
console.log(maxSubsequenceSum([1,2,3,12,3], 10)); // => 9
console.log(maxSubsequenceSum([4,5,6], 10)); // => 10
console.log(maxSubsequenceSum([4,5,1,2,3,6], 8)); // => 8
console.log(maxSubsequenceSum([3,0,2,1,9], 4)); // => 4
