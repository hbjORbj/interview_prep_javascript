/*
Verifying an Alien Dictionary

In an alien language, surprisingly they also use english lowercase letters,

but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet,

return true if and only if the given words are sorted lexicographicaly in this alien language.
*/

var isAlienSorted = function (words, order) {
  let dict = new Map();
  for (let i = 0; i < order.length; i++) {
    dict.set(order[i], i);
  }
  for (let i = 0; i < words.length - 1; i++) {
    let cur = words[i],
      next = words[i + 1];
    for (let j = 0; j < cur.length; j++) {
      if (next[j] == undefined) {
        // next word is a complete substring of current word but shorter
        return false;
      }
      if (cur[j] !== next[j]) {
        if (dict.get(cur[j]) > dict.get(next[j])) {
          return false;
        } else {
          break;
        }
      }
    }
  }
  return true;
  // Time Complexity: O(C), C = total # of characters
  // Space Complexity: O(26) = O(1)
};
