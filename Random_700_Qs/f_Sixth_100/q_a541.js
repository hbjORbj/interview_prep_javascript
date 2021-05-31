/*
Word Break

Given a string s and a dictionary of strings wordDict,

return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

var wordBreak = function (s, wordDict) {
  let set = new Set(wordDict);
  let memo = new Map();
  return validBreakDown(s, 0, set, memo);
  // T.C: O(N^2)
  // S.C: O(N)
};

const validBreakDown = (s, startIdx, set, memo) => {
  if (startIdx === s.length) {
    // end of string is reached
    return true;
  }
  if (memo.has(startIdx)) {
    return memo.get(startIdx);
  }
  for (let i = startIdx; i < s.length; i++) {
    let substr = s.substring(startIdx, i + 1);
    if (set.has(substr) && validBreakDown(s, i + 1, set, memo)) {
      memo.set(startIdx, true);
      return true;
    }
  }
  memo.set(startIdx, false);
  return false;
};
