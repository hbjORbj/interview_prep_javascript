/*
Valid Palindrome

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/

/*
Qs:
1. Is an empty string considered a palindrome? - Yes.

First Solution:
1. Since we ignore cases, we turn given string into lower case.
2. We only consider alphanumeric characters, so we replace all other characters including whitespace with empty string.
3. We set two pointers, one starting at zero and the other starting at the end of string. 
4. Check if each character is equal and shrink both pointers until they go past each other.
*/
var isPalindrome = function (s) {
  s = s
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g, ""); // creates a new string -> O(N) space complexity
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    if (s[low] !== s[high]) return false;
    low++, high--;
  }
  return true;
  // T.C: O(N)
  // S.C: O(N)
};

// Second Solution
var isPalindrome = function (s) {
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    // validate character at both pointers
    while (low < high && !isAlphaNumeric(s[low])) low++;
    while (low < high && !isAlphaNumeric(s[high])) high--;

    if (s[low].toLowerCase() !== s[high].toLowerCase()) return false;
    low++, high--;
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};

function isAlphaNumeric(x) {
  let code = x.charCodeAt();
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}
