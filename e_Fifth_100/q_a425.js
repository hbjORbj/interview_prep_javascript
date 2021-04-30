/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/

var wordPattern = function (pattern, s) {
  let words = s.split(" ");
  let m = new Map();
  let used = new Set();
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (m.has(pattern[i])) {
      if (m.get(pattern[i]) !== words[i]) {
        return false;
      }
    } else {
      if (used.has(words[i])) {
        return false;
      }
      m.set(pattern[i], words[i]);
      used.add(words[i]);
    }
  }
  return true;
  // T.C: O(N), N = # of characters in pattern
  // S.C: O(N)
};
