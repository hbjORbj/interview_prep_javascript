/*
Buddy Strings

Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
*/

/*
Important Note: You are required to perform a swap of two letters. Exactly one. No less, No more.

1. Check strings' lengths. If they are different, return false.
2. Iterate through both strings. If two characters are different, push the index to an array.
3. After iteration is done, array should contain exactly two indices (idx1 and idx2) and
s[idx1] == goal[idx2] and s[idx2] == goal[idx1]. Or, another case is that two strings are exactly the same.
In this case, they should contain one same letter that occurs more than once so that strings stay unchanged after one swap.
For all other cases, return false.
*/
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  let swapIdx = [],
    chars = new Array(26).fill(0),
    sameCharTwice = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      swapIdx.push(i);
      if (swapIdx.length > 2) return false;
    } else {
      let idx = s.charCodeAt(i) - 97;
      chars[idx]++;
      if (chars[idx] > 1) sameCharTwice = true;
    }
  }
  if (
    swapIdx.length === 2 &&
    s[swapIdx[0]] === goal[swapIdx[1]] &&
    s[swapIdx[1]] === goal[swapIdx[0]]
  ) {
    return true;
  }
  if (swapIdx.length === 0 && sameCharTwice) {
    return true;
  }
  return false;
  // T.C: O(M), M = length of s
  // S.C: O(1)
};
