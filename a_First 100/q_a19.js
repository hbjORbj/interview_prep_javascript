/*
Given a string s, return the longest palindromic substring in s.
s consist of only digits and English letters (lower-case and/or upper-case),
*/

var longestPalindrome = function (s) {
  for (let i = s.length - 1; i >= 0; i--) {
    let start = 0;
    let end = i;
    while (end < s.length) {
      if (isPalindrome(s, start, end)) {
        return s.substring(start, end + 1);
      }
      start++, end++;
    }
  }
  return "";
};

const isPalindrome = (str, i, j) => {
  let start = i,
    end = j;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++, end--;
  }
  return true;
};

/*
Test Cases: ("abacbcab") => "bacbcab"

Idea:
We need to return the longest solution so we will have better time complexity if we
start checking substrings of the longest length to the shortest length.
Therefore, we will loop over s from the end, decrementally reducing our window.
If our window is a palindrome, we return the window, else we slide the window to the right
until the end of s. In this way, we can keep the same length of our window and therefore check every possible
substring of this length. If no window of this length is a palindrome, we decrement our window's length and repeat the process
until we find a palindrome.

Time Complexity: O(n^2)
Space Complexity: O(n)

Category: Sliding Window
*/
