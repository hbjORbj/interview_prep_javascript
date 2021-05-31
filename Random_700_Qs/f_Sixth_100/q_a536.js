/*
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.
*/

var lengthOfLongestSubstring = function (s) {
  let start = 0,
    end = 0;
  let m = new Map();
  let maxLen = 0;
  while (end < s.length) {
    while (start < end && m.get(s[end]) === 1) {
      m.set(s[start], m.get(s[start]) - 1);
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    m.set(s[end], 1);
    end++;
  }
  return maxLen;
  // T.C: O(N)
  // S.C: O(N)
};
