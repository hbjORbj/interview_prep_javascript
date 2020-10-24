/*
Given a string s, return the last substring of s in lexicographical order.
*/
var lastSubstring = function(s) {
    if (s.length == 0) return "";
    let indices = findMaxIndices(s);
    let maxSubstr = "";
    for (let index of indices) {
        let substr = s.slice(index);
        if (substr > maxSubstr) {
            maxSubstr = substr;
        }
    }
    return maxSubstr;
    
};

var findMaxIndices = function(s) {
    let maxChar = '', indices = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char >= maxChar) {
            maxChar = char;
            indices.push(i);
        }
    }
    return indices;
}

/*
Test Cases:
"cacacb" => "cb"
"abab" => "bab"
"" => ""

First, the maximum substring must start with the maximum character in the string.
So, we collect indices of all maximum characters.
Second, we simply need to take the longest substring from each index because if prefixes
are the same the longer one is considered greater. Find the greatest out of those longest substrings from each index.

Time Complexity: O(n)
Space Complexity: O(n)
*/