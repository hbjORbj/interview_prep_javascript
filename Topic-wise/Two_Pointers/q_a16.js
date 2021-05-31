/*
Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/

var characterReplacement = function (s, k) {
  let mostFreq = -Infinity,
    max = -Infinity;
  let arr = new Array(26).fill(0);
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    let idx = s.charCodeAt(end) - 65;
    arr[idx] += 1;
    mostFreq = Math.max(mostFreq, arr[idx]);
    let charsToModify = end - start + 1 - mostFreq;
    // validate window (so that we can turn the current window into substring w/
    // the same characters using k modifications)
    // we simply need to advance `start` pointer by 1 to validate window
    // Why? window size - mostFreq = # of characters to modify, right?
    // window size just got smaller by, so # of characters to modify also just got
    // smaller by 1. Most freq value may stay unchanged or decrease by 1. There is
    // no chance that it increases by reducing window size hence there is no need to
    // worry about it
    if (charsToModify > k) {
      let idx2 = s.charCodeAt(start) - 65;
      arr[idx2] -= 1;
      start++;
    }
    // Keep track of the maximum valid substring length
    max = Math.max(max, end - start + 1);
  }
  return max;
  // T.C: O(N)
  // S.C: O(1)
};
