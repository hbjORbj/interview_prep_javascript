/*
Word Break

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

var wordBreak = function (s, wordDict) {
  let dict = new Set(wordDict);
  let memo = new Map();
  return canFormSequence(dict, memo, s);
  // Time Complexity: O(N^2), max # of possible substrings is N^2 / 2
  // Space Complexity: O(N), call stack can go as deep as the length of string
};

const canFormSequence = (dict, memo, cur) => {
  if (dict.has(cur)) {
    return true;
  }
  if (memo.has(cur)) {
    return memo.get(cur);
  }
  for (let i = 1; i < cur.length; i++) {
    let prefix = cur.slice(0, i);
    let suffix = cur.slice(i);
    if (dict.has(prefix) && canFormSequence(dict, memo, suffix)) {
      memo.set(cur, true);
      return true;
    }
  }
  memo.set(cur, false);
  return false;
};

/*
If s cannot be broken down into a word in wordDict, take a substring and check if it can in a recursive manner.
If there is a path, return true
Else, return false.
Memoization can be added to optimise the function
*/
