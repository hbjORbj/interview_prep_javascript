/*
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
*/

var minWindow = function(s, t) {
    let m = new Map(), start = 0, res = "";
    for (let char of t) {
        m.set(char, m.get(char) + 1 || 1);
    }
    let count = m.size;
    for (let end = 0; end < s.length; end++) {
        let char = s[end];
        if (m.has(char)) m.set(char, m.get(char) - 1);
        if (m.get(char) === 0) count--;
        
        while (count === 0) {
            let substr = s.substring(start, end+1);
            if (substr.length < res.length || res == "") res = substr;
            let leftChar = s[start];
            if (m.has(leftChar)) m.set(leftChar, m.get(leftChar) + 1);
            if (m.get(leftChar) > 0) count++;
            start++;
        }
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};