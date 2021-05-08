/*
Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palin­drome.

A palindrome is a word or phrase that is the same forwards and backwards.

A permutation is a rearrangement of letters.

The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)
*/

/*
Qs:
1. Is an empty string a palindrome?
- Yes.
2. Is permutation case-sensitive?
- No.
3. Are whitespaces significant?
- No.
*/

/*
Solution:
Each character in a palindrome should occur in even numbers except one character.
We scan through a string and record the number of occurrences of each character in the string.
If more than one character occurs in odd numbers, return false;
Else, return true.
*/

// Assume that the given string is an ASCII string
const isPermutationPalindrome = (str) => {
  if (str === null) {
    return false;
  }
  if (str === "") {
    return true;
  }
  // Storage for ASCII characters
  let chars = new Array(128).fill(0);

  // Iterate through given string
  for (let i = 0; i < str.length; i++) {
    // Ignore whitespace
    if (str[i] === " ") {
      continue;
    }
    let charCode = str[i].charCodeAt();
    // This is case-insensitive
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }
    chars[charCode]++;
  }
  let odd = 0;
  // Count the number of chars with odd number occurrence
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] % 2 === 1) {
      odd++;
      if (odd > 1) {
        return false;
      }
    }
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};

console.log(isPermutationPalindrome("Tact Coa"));
