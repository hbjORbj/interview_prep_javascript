/*
By given a string “s” with length “n”.

Write a function to find all length “10” substrings that occur in “s” two or more times.

Example:
String s = “abcdabcdabcdabcd” gives us the following return:
abcdabcdab
bcdabcdabc
cdabcdabcd
*/

/*
// First Solution
// Brute Force
function repeatingSubstring(s, n) {
  // string's length should be greater than or equal to 10
  if (n < 10) {
    return [];
  }
  let hashSet = new Set(),
    res = new Set();
  let start = 0;
  for (let end = 9; end < n; end++) {
    let substr = s.substring(start, end + 1);
    if (hashSet.has(substr)) {
      res.add(substr);
    } else {
      hashSet.add(substr);
    }
    start++;
  }
  return Array.from(res);
  // T.C: O(K * (N-K+1)), where K = 10
  // S.C: O(K * (N-K+1))
}
*/

// Second Solution
// Rolling Hash
// Assumption: given string consists of lower-case English letters
function repeatingSubstring(s, n) {
  if (n < 10) {
    return [];
  }
  let hashSet = new Set(),
    res = new Set();
  let hash = 0,
    base = 26,
    windowSize = 10;
  // process the first window separately
  for (let i = 0; i < windowSize; i++) {
    hash += Math.pow(base, windowSize - 1 - i) * decode(s[i]);
  }
  hashSet.add(hash);
  for (let i = 10; i < n; i++) {
    // subtract the left-most bit
    hash -= Math.pow(base, windowSize - 1) * decode(s[i - windowSize]);
    hash *= base;
    hash += decode(s[i]);
    if (hashSet.has(hash)) {
      res.add(s.substring(i - windowSize + 1, i + 1));
    } else {
      hashSet.add(hash);
    }
  }
  return Array.from(res);
  // T.C: O(K*(N-K+1)) where K = 10 in the worst case
  // but average time complexity will be O(N-K+1) which is much better
  // S.C: O(K*(N-K+1))
}

function decode(char) {
  return char.charCodeAt() - 97 + 1;
}
console.log(repeatingSubstring("abcdabcdabcdabcd", 16)); // ["abcdabcdab", "bcdabcdabc", "cdabcdabcd"]
