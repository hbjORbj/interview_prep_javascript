/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/
function longestCommonPrefix(arr) {
    if (!arr.length) return "";
    let prefix = "";
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j][i] !== arr[j+1][i]) return prefix;
        }
        prefix += arr[0][i];
    }
    return prefix;
}

/*
Test Cases: ['apple', 'app', 'api'] => 'ap'

Idea:
1. We will use two loops. One loops over the first word and the other inside this loop loops over the array and check if every word has
this character at the same position. If they do, append this character to return variable. Else, return the prefix we've collected so far.

Time Complexity: O(n)
Space Complexity: O(1)

Category: String, Array
*/