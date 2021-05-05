/*
Add Binary

Given two binary strings a and b, return their sum as a binary string.
*/
/*
I used array because string is an immutable object in JS and
this causes the program to repeatedly create a new string
*/

var addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1;
  let res = new Array(Math.max(a.length, b.length) + 1);
  let idx = Math.max(i, j) + 1;
  let carry = 0,
    sum = 0;
  while (i >= 0 && j >= 0) {
    sum = Number(a[i--]) + Number(b[j--]) + carry;
    res[idx--] = sum % 2;
    carry = sum >= 2 ? 1 : 0;
  }

  while (i >= 0) {
    sum = Number(a[i--]) + carry;
    res[idx--] = sum % 2;
    carry = sum >= 2 ? 1 : 0;
  }

  while (j >= 0) {
    sum = Number(b[j--]) + carry;
    res[idx--] = sum % 2;
    carry = sum >= 2 ? 1 : 0;
  }
  if (carry > 0) {
    res[0] = carry;
  }
  return res.join("");
  // T.C: O(max(M,N))
  // S.C: O(max(M,N))
};
