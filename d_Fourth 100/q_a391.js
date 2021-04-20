/*
Given a string, find the longest substring with unique characters.

ex) "whatwhywhere" -> "atwhy"
*/

/*
Qs
1. Does input string contain only alphabets?
- Consider one case with any ASCII characters and another case with only lowercase alphabets.
2. What if there are multiple answers?
- Return any one.
*/

// When input string contains any ASCII characters - use HashMap
var findLongestSubstring = function (str) {
  if (str == null || str.length == 0) return;
  let start = 0;
  let resStartIdx = 0,
    resEndIdx = 0;
  let m = new Map(); // records the number of occurrences of a character
  for (let end = 0; end < str.length; end++) {
    // Update HashMap accordingly
    m.set(str[end], m.get(str[end]) + 1 || 1);

    // Validate window
    while (m.get(str[end]) > 1) {
      m.set(str[start], m.get(str[start]) - 1);
      start++;
    }

    // Keep track of longest substring
    if (end - start + 1 > resEndIdx - resStartIdx + 1) {
      resStartIdx = start;
      resEndIdx = end;
    }
  }

  return str.substring(resStartIdx, resEndIdx + 1);
  // Time Complexity: O(N)
  // Space Complexity: O(N)
};

/*
1. Set two pointers both to zero. One pointer is the start of window and the other is the end.
2. Expand the end pointer one by one while all characters in the window are unique. 
If there are duplicate characters, expand the start pointer until there are no longer duplicate characters.
3. Repeat this process until the end pointer reaches the end of string, whilist keeping track of the longest substring.
*/
console.log(findLongestSubstring("a"));
console.log(findLongestSubstring("ab"));
console.log(findLongestSubstring("acbac"));
console.log(findLongestSubstring("abcde"));
console.log(findLongestSubstring("whatwhywhere"));

// Slightly different version of findLongestSubstring1()
const findLongestSubstring2 = (str) => {
  if (str === null || str === "") {
    return "";
  }
  let resStart = 0,
    resEnd = 0;
  let start = 0;
  let m = new Map();
  for (let end = 0; end < str.length; end++) {
    // Ensure that every character within the window is unique
    while (m.has(str[end]) && start < end) {
      m.delete(str[start]);
      start++;
    }
    // Add current character to the map
    m.set(str[end], 1);

    // the size of map represents the length of the current substring with unique characters
    if (m.size > resEnd - resStart + 1) {
      resEnd = end;
      resStart = start;
    }
  }
  return str.substring(resStart, resEnd + 1);
};
console.log("------------------------");
console.log(findLongestSubstring2("a"));
console.log(findLongestSubstring2("ab"));
console.log(findLongestSubstring2("acbac"));
console.log(findLongestSubstring2("abcde"));
console.log(findLongestSubstring2("whatwhywhere"));

// When input string contains only lowercase alphabets - use an array of size 26 (linear space complexity)
var findLongestSubstring3 = function (str) {
  if (str == null || str.length == 0) return;
  let start = 0;
  let resStartIdx = 0,
    resEndIdx = 0;
  let arr = new Array(26).fill(0);
  for (let end = 0; end < str.length; end++) {
    // Update arr accordingly
    let charCode = str[end].charCodeAt() - 97;
    arr[charCode]++;

    // Validate window
    while (arr[charCode] > 1) {
      let charCodeStart = str[start].charCodeAt() - 97;
      arr[charCodeStart]--;
      start++;
    }

    // Keep track of longest substring
    if (end - start + 1 > resEndIdx - resStartIdx + 1) {
      resStartIdx = start;
      resEndIdx = end;
    }
  }
  return str.substring(resStartIdx, resEndIdx + 1);
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};
console.log("------------------------");
console.log(findLongestSubstring3("a"));
console.log(findLongestSubstring3("ab"));
console.log(findLongestSubstring3("acbac"));
console.log(findLongestSubstring3("abcde"));
console.log(findLongestSubstring3("whatwhywhere"));

// When input string contains all alphabets - use an array of size 52 (linear space complexity)
const findLongestSubstring4 = (str) => {
  function charToIndex(char) {
    let index = -1;
    let charCode = char.charCodeAt();
    if (charCode >= 97) {
      // lowercase letters
      index = charCode % 97;
    } else {
      // uppercase letters
      index = (charCode % 65) + 26;
    }
    return index;
  }

  if (str === null || str === "") {
    return "";
  }
  let start = 0,
    resStart = 0,
    resEnd = 0;
  let arr = new Array(52).fill(0);
  for (let end = 0; end < str.length; end++) {
    let idx1 = charToIndex(str[end]);
    while (arr[idx1] === 1) {
      let idx2 = charToIndex(str[start]);
      arr[idx2] = 0;
      start++;
    }
    arr[idx1] = 1;
    if (end - start + 1 > resEnd - resStart + 1) {
      resStart = start;
      resEnd = end;
    }
  }
  return str.substring(resStart, resEnd + 1);
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};

console.log("------------------------");
console.log(findLongestSubstring4("a"));
console.log(findLongestSubstring4("ab"));
console.log(findLongestSubstring4("acbac"));
console.log(findLongestSubstring4("abcde"));
console.log(findLongestSubstring4("whatwhywhere"));
