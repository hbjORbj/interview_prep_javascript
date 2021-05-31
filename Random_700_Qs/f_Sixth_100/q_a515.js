/*
Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

/*
Solution

A string is an anagram of another if there exists a permutation of letters of one string
that equal to the other string.

So, if the two strings have different lengths, return false.

Since given strings only consist of lowercase letters, we can use an array of constant space
to record the number of occurrences of a letter.

If the number of occurrences of every letter in one string equals that of another string,
return true.
Else, return false.
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let dict = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let charCode = s[i].charCodeAt();
    let idx = charCode - 97;
    dict[idx] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    let charCode = t[i].charCodeAt();
    let idx = charCode - 97;
    dict[idx] -= 1;
    if (dict[idx] < 0) {
      return false;
    }
  }
  return true;
  // T.C: O(M + N), M = length of s, N = length of t
  // S.C: O(1)
};
