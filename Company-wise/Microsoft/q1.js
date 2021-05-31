/*
Minimum Deletions to Make Character Frequencies Unique

A string s is called good if there are no two different characters in s that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
*/

var minDeletions = function (s) {
  let chars = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i) - 97;
    chars[charCode]++;
  }
  // sort the frequencies from greatest to smallest
  chars.sort((a, b) => b - a);
  let del = 0;
  // For every character to occur an unique number of times,
  // the array should be strictly descending
  for (let i = 1; i < chars.length; i++) {
    // frequency should be greater than 0
    // since we can't delete an element occurring 0 times
    if (chars[i] > 0 && chars[i - 1] === chars[i]) {
      chars[i] -= 1;
      del += 1;
    }
    // previous frequency should always be greater than current frequency
    // however, frequency can't go below zero
    else if (chars[i] > 0 && chars[i - 1] < chars[i]) {
      let diff = chars[i] - chars[i - 1];
      let tempDel = diff + (chars[i] - diff > 0 ? 1 : 0);
      chars[i] -= tempDel;
      del += tempDel;
    }
  }
  return del;
  // T.C: O(N), sorting an array with a constant number of elements results in O(N) time complexity
  // S.C: O(1)
};
