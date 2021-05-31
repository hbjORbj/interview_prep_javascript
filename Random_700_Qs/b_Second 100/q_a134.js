/*
Given a string s containing only a and b, 

find longest substring of s such that s does not contain more than two contiguous occurrences of a and b.

Ex) 
"aabbaaaaabb" => "aabbaa"
"aabbaabbaabbaa" => "aabbaabbaabbaa"
*/

function maxLenSubStr(s) {
    let res = "";
    for (let start = 0, end = 0, numOfConsecutiveChars = 0; end <= s.length; end++) {
        if (++numOfConsecutiveChars > 2 || end == s.length) { // time to end our substring is these two cases
            if (end - start > res.length) res = s.substring(start,end); // if it is not longer, there is no need to update
            start = end - 1; // slide our window so we can look for a new valid substring
            numOfConsecutiveChars = 2; // now we have a valid substring with two contiguous occurrences instead of three
        }
        if (s[end] !== s[end+1]) numOfConsecutiveChars = 0;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}

console.log(maxLenSubStr("aabbaaaaabb")); // => "aabbaa"
console.log(maxLenSubStr("aabbaabbaabbaa")); // => "aabbaabbaabbaa"
console.log(maxLenSubStr("")); // => ""
console.log(maxLenSubStr("bbbaaa")); // => "bbaa"
console.log(maxLenSubStr("aabbaaaababababbb")); // => "aababababb"
