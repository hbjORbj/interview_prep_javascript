/*
Given string str, 

find the length of the longest substring of str such that no three consecutive characters in the substring are same.

Ex) 
str = “baaabbabbb” => 7
str = “babba” => 5
*/

function maxLenSubStr(s) {
    let start = 0, end = 0;
    let numOfConsecutiveChars = 0;
    let maxLen = 0
    while (end <= s.length) {
        numOfConsecutiveChars++;
        if (numOfConsecutiveChars > 2 || end == s.length) { // time to end our substring is these two cases
            maxLen = Math.max(end-start, maxLen);
            start = end-1; // slide our window so we can look for a new valid substring
            numOfConsecutiveChars--; // now we have a valid substring with two contiguous occurrences instead of three
        }
        if (s[end] !== s[end+1]) numOfConsecutiveChars = 0;
        end++;
    }
    return maxLen;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}

console.log(maxLenSubStr("baaabbabbb")); // => 7
console.log(maxLenSubStr("babba")); // => 5
console.log(maxLenSubStr("ccbbddjjjababaacdaa")); // => 12
console.log(maxLenSubStr("")); // => 0
console.log(maxLenSubStr("a")); // => 1
console.log(maxLenSubStr("aa")); // => 2