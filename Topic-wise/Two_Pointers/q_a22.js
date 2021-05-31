/*
Longest Substring with At Most K Distinct Characters

Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
*/

/*
We keep two pointers: `start` and `end` which indicate the start and end of current window
respectively. We keep expanding `end` and increase the size of window until we have
distinct characters more than `k`. If so, we advance `start` and reduce the size of window.
We repeat this until we finish iterating through the end of string. We shouldn't forget to
keep track of the maximum window size.
*/
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let m = new Map();
  let maxWindowSize = 0;
  let start = 0;
  let distinctChars = 0;
  for (let end = 0; end < s.length; end++) {
    // Update current element's # of occurrences in Hash Table (increment)
    m.set(s[end], m.get(s[end]) + 1 || 1);
    if (m.get(s[end]) === 1) distinctChars++;

    // validate window so that it contains at most k distinct characters
    while (distinctChars > k && start <= end) {
      m.set(s[start], m.get(s[start]) - 1);
      if (m.get(s[start]) === 0) distinctChars--;
      start++;
    }
    maxWindowSize = Math.max(maxWindowSize, end - start + 1);
  }
  return maxWindowSize;
  // T.C: O(N)
  // S.C: O(N)
};
