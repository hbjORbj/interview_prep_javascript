/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
*/

var arrayStringsAreEqual = function (word1, word2) {
  let idx1 = 0,
    idx2 = 0;
  let i = 0,
    j = 0;
  while (true) {
    // validate pointer for word in word1
    while (idx1 < word1.length && i === word1[idx1].length) {
      idx1++;
      i = 0;
    }
    // validate pointer for word in word2
    while (idx2 < word2.length && j === word2[idx2].length) {
      idx2++;
      j = 0;
    }
    // end of either array is reached
    if (idx1 === word1.length || idx2 === word2.length) {
      break;
    }
    if (word1[idx1][i] !== word2[idx2][j]) {
      return false;
    }
    i++, j++;
  }
  return idx1 === word1.length && idx2 === word2.length;
  // T.C: O(M + N), M = # of characters in word1, N = # of characters in word2
  // S.C: O(1)
};
