/*
Check Permutation

Given two strings, write a method to decide if one is a permutation of the other.
*/

/*
Qs
1. Is the permutation comparison case-sensitive?
- Yes.

2. Is a whitespace considered a character and significant?
- Yes.
*/

/*
Check if the two strings have the same character counts
*/

// Assume both strings are ASCII strings
const checkPermutation = (str1, str2) => {
  // Strings of different lengths cannot be permutations of each other
  if (str1 === null || str2 === null || str1.length !== str2.length) {
    return false;
  }
  let chars = new Array(128).fill(0);
  for (let i = 0; i < str1.length; i++) {
    let charCode = str1[i];
    chars[charCode]++;
  }
  for (let i = 0; i < str2.length; i++) {
    let charCode = str2[i];
    chars[charCode]--;
    if (chars[charCode] < 0) {
      return false;
    }
  }
  return true;
};

console.log(checkPermutation("abca", "cba"));
console.log(checkPermutation("abca", "cbaa"));
