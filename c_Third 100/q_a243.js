/*
Given two strings s and t , write a function to determine if t is an anagram of s.
*/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let m = new Map();
    for (let i = 0; i < s.length; i++) {
        m.set(s[i], m.get(s[i]) + 1 || 1);
    }
    let count = m.size;
    for (let i = 0; i < t.length; i++) {
        if (!m.has(t[i])) return false;
        m.set(t[i], m.get(t[i]) - 1);
        if (m.get(t[i]) == 0) count--;
    }
    return count == 0;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};