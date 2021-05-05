/*
Add Strings

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
*/

/*
I used array because string is an immutable object in JS and
this causes the program to repeatedly create a new string
*/
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1;
  let res = new Array(Math.max(num1.length, num2.length) + 1);
  let idx = Math.max(i, j) + 1;
  let sum = 0,
    carry = 0;
  while (i >= 0 && j >= 0) {
    sum = Number(num1[i--]) + Number(num2[j--]) + carry;
    res[idx--] = (sum % 10).toString();
    carry = sum > 9 ? 1 : 0;
  }
  while (i >= 0) {
    sum = Number(num1[i--]) + carry;
    res[idx--] = (sum % 10).toString();
    carry = sum > 9 ? 1 : 0;
  }
  while (j >= 0) {
    sum = Number(num2[j--]) + carry;
    res[idx--] = (sum % 10).toString();
    carry = sum > 9 ? 1 : 0;
  }
  console.log(res);
  if (carry > 0) {
    res[0] = carry;
  }
  return res.join("");
  // T.C: O(max(M,N))
  // S.C: O(max(M,N))
};
