/*
Substring with Concatenation of All Words

You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

You can return the answer in any order.
*/

var findSubstring = function (s, words) {
  let len = words[0].length;
  let windowSize = words.length * len;
  if (s.length < windowSize) {
    return [];
  }
  let m = new Map(),
    res = [];
  // Fill Hash table with entry being (word, number of occurrences)
  for (let i = 0; i < words.length; i++) {
    m.set(words[i], m.get(words[i]) + 1 || 1);
  }
  let start = 0;
  while (start + windowSize - 1 < s.length) {
    if (isConcat(s, new Map(m), len, start, start + windowSize - 1)) {
      res.push(start);
    }
    start++;
  }
  return res;
  // Let M be the length of s, N be the number of words
  // T.C: O(M*N)
  // S.C: O(M*N), new map is used for every iteration
};

const isConcat = (s, m, len, start, end) => {
  let chars = m.size;
  for (let i = start; i <= end; i += len) {
    let substr = s.substring(i, i + len);
    if (!m.has(substr) || m.get(substr) === 0) return false;
    m.set(substr, m.get(substr) - 1);
    if (m.get(substr) === 0) {
      chars--;
    }
  }
  return chars === 0;
  // if we consider time complexity of substring() to be O(1),
  // T.C: O(N)
};
