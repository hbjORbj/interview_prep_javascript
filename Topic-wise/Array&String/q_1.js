/*
Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.
*/

/*
We should process even-length palindromes and odd-length palindromes differently.

For even-length palindromes, we check if current char equals right char and expand pointers outwards if they
are equal.

For odd-length palindromes, we check if left char equals right char and expand pointers outwards if they are
equal.
*/
var longestPalindrome = function (s) {
  let maxLen = 0,
    resStart = -1,
    resEnd = -1;
  // Even-length palindromes
  for (let i = 0; i < s.length; i++) {
    let offset = 0;
    while (
      isValidIndex(s, i - offset) &&
      isValidIndex(s, i + 1 + offset) &&
      s[i - offset] === s[i + 1 + offset]
    ) {
      offset++;
    }
    let len = offset * 2;
    if (len > maxLen) {
      maxLen = len;
      resStart = i - offset + 1;
      resEnd = i + offset;
    }
  }

  // Odd-length palindromes
  for (let i = 0; i < s.length; i++) {
    let offset = 0;
    while (
      isValidIndex(s, i - 1 - offset) &&
      isValidIndex(s, i + 1 + offset) &&
      s[i - 1 - offset] === s[i + 1 + offset]
    ) {
      offset++;
    }
    let len = offset * 2 + 1;
    if (len > maxLen) {
      maxLen = len;
      resStart = i - offset;
      resEnd = i + offset;
    }
  }
  return s.substring(resStart, resEnd + 1);
  // T.C: O(N^2)
  // S.C: O(1)
};

function isValidIndex(s, idx) {
  return idx >= 0 && idx < s.length;
}
