/*
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.
*/

function longestNonRepeatingSubstr(s) {
  let start = 0,
    set = new Set();
  let max = 0;
  for (let end = 0; end < s.length; end++) {
    // validate current substring
    while (start < end && set.has(s[end])) {
      set.delete(s[start++]);
    }
    set.add(s[end]);
    max = Math.max(max, end - start + 1);
  }
  return max;
  // T.C: O(N)
  // S.C: O(N)
}
