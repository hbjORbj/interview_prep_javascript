/*
Given a string s, return the longest palindromic substring in s.
*/

var longestPalindrome = function (str) {
  if (str === null || str.length === 0) {
    return str;
  }
  let resStart = 0,
    resEnd = 0;
  let longest = 1;

  // Even-length-palindromes: compare itself and its right char
  for (let i = 0; i < str.length; i++) {
    let offset = 0;
    while (
      isValidIndex(str, i - offset) &&
      isValidIndex(str, i + offset + 1) &&
      str[i - offset] === str[i + offset + 1]
    ) {
      offset++;
    }
    if (longest < offset * 2) {
      resStart = i - offset + 1;
      resEnd = i + offset;
      longest = offset * 2;
    }
  }

  // Odd-length-palindromes: compare its left char and right char
  for (let i = 0; i < str.length; i++) {
    let offset = 0;
    while (
      isValidIndex(str, i - offset - 1) &&
      isValidIndex(str, i + offset + 1) &&
      str[i - offset - 1] === str[i + offset + 1]
    ) {
      offset++;
    }
    if (longest < offset * 2 + 1) {
      resStart = i - offset;
      resEnd = i + offset;
      longest = offset * 2 + 1;
    }
  }
  return str.substring(resStart, resEnd + 1);
  // T.C: O(N^2), we visit the entire string for every character in the worst case
  // S.C: O(1)
};

const isValidIndex = (str, idx) => {
  return idx >= 0 && idx <= str.length - 1;
};
