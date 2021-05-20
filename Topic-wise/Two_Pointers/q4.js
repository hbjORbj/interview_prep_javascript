/*
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.
*/

/*
We need two pointers: `start` and `end`. They indicate start index and end index of substring respectively. They both start at 0. We keep expand `end` while substring contains
unique characters. While substring contains repeating characters, we advance `start` until it contains unique characters. We repeat this until the end of string.

How do we figure out if substring contains repeating characters?
As we expand `end`, we record character to Hash Set. If a character is in the hash set,
window contains a repeating character.
*/
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let start = 0;
  let max = 0;
  for (let end = 0; end < s.length; end++) {
    // ensure substring doesn't contain the current character
    while (set.has(s[end])) {
      set.delete(s[start++]);
    }
    set.add(s[end]);
    max = Math.max(max, end - start + 1);
  }
  return max;
};
