/*
Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

var longestPalindrome = function (s) {
  let m = new Map();
  for (let i = 0; i < s.length; i++) {
    m.set(s[i], m.get(s[i]) + 1 || 1);
  }
  let numOfOdds = 0;
  for (let value of m.values()) {
    if (value % 2 === 1) {
      numOfOdds += 1;
    }
  }
  return numOfOdds > 0 ? s.length - numOfOdds + 1 : s.length;
  // T.C: O(N)
  // S.C: O(N)
};

// Every character in a palindrome should be occurring in even except only one (which can go into the middle)
// We can make odd-length characters even by subtracting 1.
// So, we count how many characters occurr in odd and subtract this count from the given string's length and add one lastly
// because one character can occurr in odd
