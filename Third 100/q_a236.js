/*
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. 

(eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.
*/

var longestCommonSubsequence = function(text1, text2) {
    if (text1 == "" || text2 == "") return 0;
    // The first row and the first col is an empty string (base case).
    // dp[row][col] represents the length of the longest possible subsequence
    // using substrings text1.substring(0,row) and text2.substring(0,col).
    let dp = new Array(text2.length+1).fill(0).map(() => new Array(text1.length+1));
    for (let row = 0; row < dp.length; row++) {
        for (let col = 0; col < dp[0].length; col++) {
            if (row == 0 || col == 0) {
                dp[row][col] = 0; // can't have a common subsequence with ""
            } else if (text1[col-1] === text2[row-1]) {
                dp[row][col] = dp[row-1][col-1] + 1;
            } else {
                dp[row][col] = Math.max(dp[row][col-1], dp[row-1][col]);
            }
        }
    }
    return dp[text2.length][text1.length];
    // Time Complexity: O(m*n), m = length of text1, n = length of text2
    // Space Complexity: O(m*n)
};