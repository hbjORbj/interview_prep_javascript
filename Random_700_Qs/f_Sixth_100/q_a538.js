/*
Minimum Window Substring

Given two strings s and t, return the minimum window in s which will contain all the characters in t.

If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
*/

var minWindow = function (s, t) {
  let m = new Map();
  for (let i = 0; i < t.length; i++) {
    m.set(t[i], m.get(t[i]) + 1 || 1);
  }
  let start = 0,
    end = 0;
  let minStart = null,
    minEnd = null;
  let uniqueChars = m.size; // # of unique characters in t
  while (end < s.length) {
    if (m.has(s[end])) {
      m.set(s[end], m.get(s[end]) - 1);
      // unique chars to collect decrements by 1
      if (m.get(s[end]) === 0) {
        uniqueChars -= 1;
      }
    }
    while (uniqueChars === 0 && start <= end) {
      if (minStart === null || minEnd - minStart > end - start) {
        minStart = start;
        minEnd = end;
      }
      if (m.has(s[start])) {
        m.set(s[start], m.get(s[start]) + 1);
        // unique chars to collect increments by 1
        if (m.get(s[start]) === 1) {
          uniqueChars += 1;
        }
      }
      start++;
    }
    end++;
  }
  return minStart === null ? "" : s.substring(minStart, minEnd + 1);
  // T.C: O(N)
  // S.C: O(N)
};
