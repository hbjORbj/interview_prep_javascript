/*
Longest String Chain

Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.

For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.
*/

var longestStrChain = function (words) {
  if (words === null || words.length === 0) {
    return 0;
  }
  // We need array sorted in ascending order of word length in order to ensure that
  // previous word has a chance of being a predecessor of current word
  words.sort((a, b) => a.length - b.length);

  // dp[i] is the maximum length of word chain ending at index i
  let dp = new Array(words.length);

  // we need to check two things for a word to be a predecessor of another word
  // 1. word is exactly one character less
  // 2. word is a subsequence (every character in it occurs in another word)
  for (let i = 0; i < words.length; i++) {
    let max = 1;
    for (let j = 0; j < i; j++) {
      if (
        words[i].length - words[j].length === 1 &&
        isSubsequence(words[j], words[i])
      ) {
        max = Math.max(max, dp[j] + 1);
      }
    }
    dp[i] = max;
  }
  return Math.max(...dp);
  // T.C: O(N^2)
  // S.C: O(N)
};

const isSubsequence = (shorter, longer) => {
  let idx1 = 0,
    idx2 = 0,
    insert = 0;
  while (idx1 < shorter.length && idx2 < longer.length) {
    if (shorter[idx1] !== longer[idx2]) {
      insert++;
      idx2++;
    } else {
      idx1++, idx2++;
    }
    if (insert > 1) {
      return false;
    }
  }
  return true;
  // T.C: O(1) thanks to this constraint: 1 <= words[i].length <= 16
};
