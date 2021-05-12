/*
Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/*
Sorting

Create a Hash table with each entry being (string, list of strings)
The key (string) will be a sorted string and its vaues (list of strings) will be a list of words that equal the key when sorted
*/
var groupAnagrams = function (strs) {
  if (strs === null || strs.length === 0) {
    return [];
  }
  let m = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i]
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    if (m.has(sorted)) {
      m.get(sorted).push(strs[i]);
    } else {
      m.set(sorted, [strs[i]]);
    }
  }
  return Array.from(m.values());
  // T.C: O(klog(k) * n),
  // where k is the max number of characters in a word and n is the # of words
  // S.C: O(n)
};

/*
Array, Hash Table

How do you check if two strings are anagrams of each other?

1. Iterate through given array. For each word in array, create an array of size 26, where each index is for each letter from a...z
2. increment corresponding index for each character in word
3. stringify it with some special character in between and this becomes the key for a record in a Hash Table
4. all anagrams will have the same key so we can store a list of strings with the same key in Hash table
*/
var groupAnagrams = function (strs) {
  if (strs === null || strs.length === 0) {
    return [];
  }
  let m = new Map();
  for (let i = 0; i < strs.length; i++) {
    let chars = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      let charCode = strs[i].charCodeAt(j);
      chars[charCode - 97] += 1;
    }
    let key = chars.join("$");
    if (m.has(key)) {
      m.get(key).push(strs[i]);
    } else {
      m.set(key, [strs[i]]);
    }
  }
  return Array.from(m.values());
  // T.C: O(N), where N is the total number of characters
  // S.C: O(n), where n is the total number of words
};
