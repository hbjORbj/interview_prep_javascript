/*
Repeated DNA Sequences

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.

When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

You may return the answer in any order.
*/

// First Solution
// Brute Force
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) {
    return [];
  }
  let set = new Set(),
    res = new Set();
  let start = 0;
  for (let end = 9; end < s.length; end++) {
    let substr = s.substring(start, end + 1);
    if (set.has(substr)) {
      res.add(substr);
    } else {
      set.add(substr);
    }
    start++;
  }
  return Array.from(res);
  // T.C: O(K * (N-K+1)), N-K+1 substrings are possible where K = 10
  // S.C: O(K * (N-K+1))
};

// Second Solution
// Rolling Hash
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) {
    return [];
  }
  let hashSet = new Set(),
    hash = 0,
    windowSize = 10,
    base = 4;
  let decoded = { A: 1, C: 2, G: 3, T: 4 };
  // process the first window separately
  for (let i = 0; i < 10; i++) {
    hash += Math.pow(base, windowSize - i - 1) * decoded[s[i]];
  }
  hashSet.add(hash);
  let res = new Set();
  for (let i = 10; i < s.length; i++) {
    // subtract the left-most bit
    hash -= Math.pow(base, windowSize - 1) * decoded[s[i - windowSize]];
    hash *= base;
    hash += decoded[s[i]];
    if (hashSet.has(hash)) {
      res.add(s.substring(i + 1 - windowSize, i + 1));
    } else {
      hashSet.add(hash);
    }
  }
  return Array.from(res);
  // T.C: O(K*(N-K+1)) where K = 10 in the worst case
  // but average time complexity will be O(N-K+1) which is much better
  // S.C: O(K*(N-K+1))
};
