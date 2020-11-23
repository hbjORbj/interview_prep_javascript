/*
Given a string s, find the length of the longest substring without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {
    let m = new Map(), start = 0, end = 0;
    let max = 0;
    for (let char of s) {
        m.set(char, 0);
    }
    // (key, value) in m is (char, occurrence in current window)
    while (end < s.length) {
        while (m.get(s[end]) > 0) {
            m.set(s[start], m.get(s[start]) - 1);
            start++;
        }
        m.set(s[end], m.get(s[end]) + 1);
        max = Math.max(max, end - start + 1);
        end++;
    }
    return max;
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

/*
"" => 0
"a" => 1
"abc" => 3
We'll use two pointers: start and end.
While there is no repeating character, we expand end pointer.
If there is repeating character, we expand start pointer and reduce our window.
We repeat the process until end pointer reaches the end of string.
We keep track of the length of the longest substring with no repeating character and return it at the end.
*/