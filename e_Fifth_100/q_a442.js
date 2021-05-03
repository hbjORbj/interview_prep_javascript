/*
Valid Palindrome II

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
*/

var validPalindrome = function (s) {
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    if (s[low] !== s[high]) {
      // 1st case: delete char at low
      // 2nd case: delete char at high
      return isSymmetric(s, low + 1, high) || isSymmetric(s, low, high - 1);
    }
    low++, high--;
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};

const isSymmetric = (s, low, high) => {
  while (low < high) {
    if (s[low] !== s[high]) {
      return false;
    }
    low++, high--;
  }
  return true;
};
