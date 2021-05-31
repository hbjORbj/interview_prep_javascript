/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== letter) {
                return prefix;
            }
        }
        prefix += letter;
    }
    return prefix;
    // Time Complexity: O(M*N), M = length of shortest word, N = length of given array
    // Space Complexity: O(1)
};

/*
["flow"] => "flow"
[] => ""
1. Scan through the array and check if the first letter of every string is the same. If true, append
the letter to prefix, and scan through again to check the next letter. Else, return the current prefix.
*/