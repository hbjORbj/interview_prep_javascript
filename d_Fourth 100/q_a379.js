/*
Find the longest palindrome in a string.

ex) "abbababaab" -> "babab"
*/

var findLongestPalindrome = function (str) {
  if (str == null) return null;
  if (str.length == 0) return [];
  let res = [0, 0];
  let longest = 1;
  // Even
  for (let i = 0; i < str.length; i++) {
    let offset = 0;
    while (
      isValidIndex(i - offset) &&
      isValidIndex(i + 1 + offset) &&
      str[i - offset] == str[i + 1 + offset]
    ) {
      offset++;
    }
    let longestAtI = offset * 2;
    if (longestAtI > longest) {
      longest = longestAtI;
      res = [i - offset + 1, i + offset];
    }
  }
  // Odd
  for (let i = 0; i < str.length; i++) {
    let offset = 0;
    while (
      isValidIndex(i - offset - 1) &&
      isValidIndex(i + offset + 1) &&
      str[i - offset - 1] == str[i + offset + 1]
    ) {
      offset++;
    }
    let longestAtI = offset * 2 + 1;
    if (longestAtI > longest) {
      longest = longestAtI;
      res = [i - offset, i + offset];
    }
  }

  return res;

  function isValidIndex(idx) {
    return idx >= 0 && idx < str.length;
  }
};

/*
Qs
1. How do you want the output?
- Return a pair of indices that represent start and end of the substring
2. Is a single character considered a palindrome?
- Yes
3. What if string is empty?
- Return an empty array

"a" => [0,0]
"" => []
"aba" => [0,2]
null => null

1. Go through each character and expand out both sides as long as the characters are equal.
    For odd length palindrome, compare its left character and right character, and if they are equal, expand out both sides
    For even length palindrome, compare itself and right character, and if they are equal, expand out both sides
2. Track the pair of indices of longest palindrome
3. Return the result.

Time Complexity: O(N^2) because in the worst case we could expand to the ends of the string for each character
Space Complexity: O(1), no extra space is needed
*/

console.log(findLongestPalindrome("a"));
console.log(findLongestPalindrome("aba"));
console.log(findLongestPalindrome("abba"));
console.log(findLongestPalindrome("abbababaab"));
