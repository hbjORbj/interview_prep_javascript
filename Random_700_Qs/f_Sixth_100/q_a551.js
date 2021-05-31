/*
Design Add and Search Words Data Structure

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
*/

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.m = new Map(); // (length x, list of strings of length x)
  // T.C: O(1)
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let len = word.length;
  if (this.m.has(len)) {
    this.m.get(len).push(word);
  } else {
    this.m.set(len, [word]);
  }
  // T.C: O(1)
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let len = word.length;
  if (!this.m.has(len)) {
    return false;
  }
  let words = this.m.get(len);
  for (let i = 0; i < words.length; i++) {
    let match = true;
    for (let j = 0; j < words[i].length; j++) {
      if (word[j] !== "." && word[j] !== words[i][j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return true;
    }
  }
  return false;
  // T.C: O(k*N), where k = length of word, N = # of words
};
