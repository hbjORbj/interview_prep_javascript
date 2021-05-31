/*
Add Strings

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger).

You must also not convert the inputs to integers directly.
*/

/*
1. We will convert both strings into arrays and iterate through both numbers from the back.
2. At each index, we add the digits of both arrays and compute properly considering `carry` and
record the correct digit to a result array at correct index (we'll keep track of this).
3. Given numbers can have different lengths so if we reached the start of either number, we consider its digit
as zero so we can traverse to the end of both numbers.
4. After iteration is done, we check if carry is still there. If so, we add it to the front of our result array.
Hence, our result array should have a length of max(num1.length, num2.length) + 1.
*/
var addStrings = function (num1, num2) {
  num1 = num1.split("");
  num2 = num2.split("");
  let res = new Array(Math.max(num1.length, num2.length) + 1);
  let i = num1.length - 1,
    j = num2.length - 1,
    k = res.length - 1;
  let carry = 0,
    sum = 0;
  while (i >= 0 || j >= 0) {
    sum =
      (i >= 0 ? Number(num1[i]) : 0) + (j >= 0 ? Number(num2[j]) : 0) + carry;
    carry = sum >= 10 ? 1 : 0;
    res[k] = sum % 10;
    i--, j--, k--;
  }
  if (carry > 0) {
    res[k] = carry;
  }
  return res.join("");
  // T.C: O(M + N), M = length of num1, N = length of num2
  // S.C: O(M + N)
};
