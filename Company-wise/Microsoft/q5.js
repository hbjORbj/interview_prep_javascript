/*
Maximum Length of a Concatenated String with Unique Characters

Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.
*/

// First Solution
var maxLength = function (arr) {
  if (arr === null || arr.length === 0) {
    return 0;
  }
  if (isUnique(arr.join(""))) {
    return arr.join("").length;
  }
  let maxLen = 0;
  dfs();
  return maxLen;
  function dfs(str = "", start = 0) {
    if (!isUnique(str)) {
      return;
    }
    maxLen = Math.max(maxLen, str.length);
    for (let i = start; i < arr.length; i++) {
      dfs(str + arr[i], i + 1);
    }
  }
  // T.C: O(2^N)
  // S.C: O(N)
};

const isUnique = (str) => {
  let chars = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i) - 97;
    if (chars[charCode] > 0) {
      return false;
    }
    chars[charCode] += 1;
  }
  return true;
};

// Second Solution
var maxLength = function (arr) {
  let maxLen = 0;
  dfs("", 0);
  return maxLen;
  function dfs(str, idx) {
    if (!isUnique(str)) {
      return;
    }
    if (idx === arr.length) {
      maxLen = Math.max(maxLen, str.length);
      return;
    }
    dfs(str + arr[idx], idx + 1);
    dfs(str, idx + 1);
  }
  // T.C: O(2^N)
  // S.C: O(N)
};

const isUnique = (str) => {
  let chars = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i) - 97;
    if (chars[charCode] > 0) {
      return false;
    }
    chars[charCode] += 1;
  }
  return true;
};
