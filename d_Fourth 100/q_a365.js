/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:
- The length of both num1 and num2 is < 5100.
- Both num1 and num2 contains only digits 0-9.
- Both num1 and num2 does not contain any leading zero.
- You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

var addStrings = function(num1, num2) {
    let idx1 = num1.length - 1, idx2 = num2.length - 1;
    let carry = 0;
    let res = "";
    while (idx1 >= 0 || idx2 >= 0) {
        let dig1 = idx1 >= 0 ? parseInt(num1[idx1--]) : 0;
        let dig2 = idx2 >= 0 ? parseInt(num2[idx2--]) : 0;
        let sum = dig1 + dig2 + carry;
        res = (sum % 10) + res;
        carry = Math.floor(sum / 10);
    }
    if (carry) {
        res = carry + res;
    }
    return res;
    // Time Complexity: O(max(m,n)), m = length of num1, n = length of num2
    // Space Complexity: O(max(m,n))
};