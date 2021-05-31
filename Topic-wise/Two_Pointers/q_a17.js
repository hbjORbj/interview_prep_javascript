/*
Permutation in String

Given two strings s1 and s2, return true if s2 contains the permutation of s1.

In other words, one of s1's permutations is the substring of s2.
*/

/*
Suppose we have a substring in s2 with ends at `start and `end`. If all characters of s1
occur in this substring and this subtring and s1 have the same length, this substring is
some permutation of s1 and therefore we return true.

1. Iterate through s2 and keep expanding window until all characters in s1 occur in
the window.
2. If we encounter a point where all characters occur in the window, we check
if window's length is equal to s1.length. If so, we return true. Else, we advance `start` and reduce size of window.
3. As we reduce size of window, our window may no longer contain all characters of s1.
Then, we go back to step(1) and repeat the process. We do this until the end of array.
*/
var checkInclusion = function (s1, s2) {
  if (s1 === "" || s2 === "") {
    return false;
  }
  let m = new Map();
  // Record every character of s1 to Hash table with entry being
  // (character, number of occurrences)
  for (let i = 0; i < s1.length; i++) {
    m.set(s1[i], m.get(s1[i]) + 1 || 1);
  }
  let start = 0,
    windowSize = s1.length;
  // number of unique characters to collect
  let counter = m.size;
  for (let end = 0; end < s2.length; end++) {
    let char = s2[end];
    if (m.has(char)) m.set(char, m.get(char) - 1);
    if (m.get(char) === 0) counter--; // we collected all occurrences of this char
    // we collected all occurrences of every character in s1
    while (counter === 0) {
      if (end - start + 1 === windowSize) return true;
      if (m.has(s2[start])) m.set(s2[start], m.get(s2[start]) + 1);
      if (m.get(s2[start]) === 1) counter++; // we should collect one more unique char
      start++;
    }
  }
  return false;
  // T.C: O(M+N), M = length of s1, N = length of s2
  // S.C: O(M)
};
