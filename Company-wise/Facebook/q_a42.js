/*
Remove All Adjacent Duplicates in String II

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them,

causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
*/

/*
Solution: Two-Pointer

i the index the next character will go into in output array
j the index iterating through given string

We keep count of adjacent, same characters. If it is same as k, we should decrement i by k so that we can overwrite
this group of adjacent k characters with upcoming characters. One important thing to note is that we should keep track
of duplicate count for every character. This allows us to continue count of a certain character from where we left off.
Hence, we use a stack for this.

After iteration is done, i represents the last index of string with all adjacent, k duplicates are removed.
Hence, we take a substring from 0 to i and return it.
*/
var removeDuplicates = function (s, k) {
  let res = new Array(s.length);
  let duplicateCountStack = [];
  let i = 0,
    duplicateCount = 1;
  for (let j = 0; j < s.length; j++) {
    res[i] = s[j];
    // res[i-1] is the correct previous character (in res, all k-duplicates are removed)
    if (s[j] === res[i - 1]) {
      duplicateCount++;
    } else {
      // save count of previous character
      duplicateCountStack.push(duplicateCount);
      // start a new count of current character
      duplicateCount = 1;
    }
    if (duplicateCount === k) {
      i -= k;
      duplicateCount = duplicateCountStack.pop(); // we continue count of previous char from where we left off
    }
    i++;
  }
  return res.slice(0, i).join("");
  // T.C: O(N)
  // S.C: O(N)
};
