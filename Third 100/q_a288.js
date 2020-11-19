/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26

Given a non-empty string containing only digits, determine the total number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.
*/

var numDecodings = function(s) {
    let memo = new Map();
    return waysToDecode(s, memo);
    // Time Complexity: O(N), we visit every substring once (there are n substrings as explained below)
    // Space Complexity: O(N), map will contain substrings [0..end], [2..end], ..., [end-1..end], which amounts to N and call stack can go only as deep as N
};

function waysToDecode(s, memo) { // we can only decode a digit or two digits at a time
    if (s[0] == '0') return 0;
    if (s.length <= 1) return 1;
    if (memo.has(s)) return memo.get(s);
    let ways = 0;
    let prefix1 = s.slice(0, 1), suffix1 = s.slice(1); // one digit and the rest of substring
    let prefix2 = s.slice(0, 2), suffix2 = s.slice(2); // two digits and the rest of substring
    ways += waysToDecode(suffix1, memo); // decode one digit and move on to decode the substring
    if (Number(prefix2) <= 26) { // decode two digits and move on to decode the substring
        ways += waysToDecode(suffix2, memo);
    }
    memo.set(s, ways);
    return ways;
}