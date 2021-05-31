/*
Verifying an Alien Dictionary

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.

The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet,

return true if and only if the given words are sorted lexicographicaly in this alien language.
*/

var isAlienSorted = function (words, order) {
  // charOrder[i] is the the alphabetical order of a character at i; i=0 is a, i=1 is b and so on...
  // lower alphabetical order means it should come earlier
  let charOrder = new Array(26);
  for (let i = 0; i < 26; i++) {
    let idx = order.charCodeAt(i) - 97;
    charOrder[idx] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    let cur = words[i],
      next = words[i + 1];
    let correctOrder = compare(cur, next, charOrder);
    if (!correctOrder) return false;
  }
  return true;
  // T.C: O(N), N = the total number of characters in `words`
  // S.C: O(1), an array of constant size (26)
};

function compare(cur, next, charOrder) {
  for (let i = 0; i < Math.min(cur.length, next.length); i++) {
    let curIdx = cur.charCodeAt(i) - 97;
    let nextIdx = next.charCodeAt(i) - 97;
    if (charOrder[curIdx] < charOrder[nextIdx]) return true;
    else if (charOrder[curIdx] > charOrder[nextIdx]) return false;
  }
  // this point is reached only if one string contains another string
  // in such case, current word should be shorter or equal in length with the next word
  if (cur.length > next.length) {
    return false;
  }
  return true;
}
