/*
Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window in s which will contain all the characters in t.

If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
*/

/*
1. Record all characters and its number of occurrences in `t` to a Hash table
2. Use two pointers: `start` and `end` which indiciate the
start and end of current window (or subarray). Start iterating through `s` by expanding `end` pointer.
3. While current window contains all characters of `t`, advance `start` pointer to figure out the minimum possible size. If current window no longer contains all characters of `t`, we start expanding `end` pointer again. Repeat this until the end of `s` is reached.
*/

var minWindow = function (s, t) {
  if (s === null || t === null) {
    return "";
  }
  let m = new Map();
  for (let i = 0; i < t.length; i++) {
    m.set(t[i], m.get(t[i]) + 1 || 1);
  }
  let resStart = null,
    resEnd = null;
  let uniqueCharsToCollect = m.size;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    if (m.has(s[end])) {
      m.set(s[end], m.get(s[end]) - 1);
      if (m.get(s[end]) === 0) {
        uniqueCharsToCollect -= 1;
      }
    }
    while (uniqueCharsToCollect === 0 && start <= end) {
      if (resStart === null || resEnd - resStart + 1 > end - start + 1) {
        resStart = start;
        resEnd = end;
      }
      if (m.has(s[start])) {
        m.set(s[start], m.get(s[start]) + 1);
        if (m.get(s[start]) === 1) {
          uniqueCharsToCollect += 1;
        }
      }
      start++;
    }
  }
  if (resStart === null) {
    return "";
  }
  return s.substring(resStart, resEnd + 1);
  // T.C: O(M + N), M = length of s, N = length of t
  // S.C: O(M)
};
