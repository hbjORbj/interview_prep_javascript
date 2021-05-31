/*
Given two strings s and t, return the minimum window in s which will contain all the characters in t. 

If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
*/

var minWindow = function (s, t) {
    if (s.length < t.length) return "";
    let m = new Map();
    for (let i = 0; i < t.length; i++) {
        m.set(t[i], m.get(t[i]) + 1 || 1);
    }
    let start = 0, end = 0, count = m.size, substr = "";
    let res = "";
    while (end <= s.length) {
        if (count == 0) { // our window contains all characters of t
            while (count == 0) {
                if (res == "" || res.length > end-start) res = s.slice(start, end);
                if (m.has(s[start])) m.set(s[start], m.get(s[start]) + 1);
                if (m.get(s[start]) > 0) count++;
                start++;
            }
        } else {
            if (m.has(s[end])) m.set(s[end], m.get(s[end]) - 1);
            if (m.get(s[end]) == 0) count--;
            end++;
        }
    }
    return res;
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};