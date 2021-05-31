/*
Given two binary strings a and b, return their sum as a binary string.
*/

var addBinary = function(a, b) {
    let binaryA = BigInt(`0b${a}`);
    let binaryB = BigInt(`0b${b}`);
    let sum = binaryA + binaryB;
    return sum.toString(2);
};

var addBinary = function(a, b) {
    let idxA = a.length - 1;
    let idxB = b.length - 1;
    let carry = 0;
    let res = "";
    while (idxA >= 0 || idxB >= 0) {
        let digA = idxA >= 0 ? Number(a[idxA--]) : 0;
        let digB = idxB >= 0 ? Number(b[idxB--]) : 0;
        let sum = digA + digB + carry;
        res = (sum % 2).toString() + res;
        carry = Math.floor(sum / 2);
    }
    if (carry) {
        res = carry + res;
    }
    return res;
    // Time Complexity: max(m, n), m = length of a, n = length of b
    // Space Complexity: max(m, n)
};