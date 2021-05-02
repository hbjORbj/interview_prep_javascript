/*
Rotated Digits

X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other (on this case they are rotated in a different direction, in other words 2 or 5 gets mirrored); 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers X from 1 to N are good?
*/

var rotatedDigits = function (N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    let str = i.toString();
    if (str.includes("3") || str.includes("4") || str.includes("7")) {
      continue;
    }
    if (
      str.includes("2") ||
      str.includes("5") ||
      str.includes("6") ||
      str.includes("9")
    ) {
      count++;
    }
  }
  return count;
  // T.C: O(N)
  // S.C: O(1)
};

// we want numbers that do not include 3 or 4 or 7 AND that either contains 2 or 5 or 6 or 9
