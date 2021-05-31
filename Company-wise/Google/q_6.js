/*
Strobogrammatic Number

Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
*/

var isStrobogrammatic = function (num) {
  let pairs = { 6: "9", 9: "6", 0: "0", 1: "1", 8: "8" };
  let l = 0,
    r = num.length - 1;
  while (l <= r) {
    if (
      pairs[num[l]] !== undefined &&
      pairs[num[r]] !== undefined &&
      pairs[num[l]] === num[r]
    ) {
      l++, r--;
    } else {
      return false;
    }
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};
