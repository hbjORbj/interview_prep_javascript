/*
Rotate String

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position.

For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.

Return True if and only if A can become B after some number of shifts on A.
*/

var rotateString = function (A, B) {
  if (A === null || B === null) {
    return false;
  }
  if (A.length !== B.length) {
    return false;
  }
  for (let i = 0; i <= A.length; i++) {
    let prefix = A.substring(0, i);
    let suffix = A.substring(i);
    let str = suffix + prefix;
    if (str === B) {
      return true;
    }
  }
  return false;
  // T.C: O(N)
  // S.C: O(N)
};
// Use every character of A as pivot and take prefix and suffix with respect to the pivot
// suffix + prefix is the result of shifting on A so compare this to B
