/*
Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

Note:
- Note that in some languages such as Java, there is no unsigned integer type.
In this case, both input and output will be given as a signed integer type.
They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using 2's complement notation.
Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

Follow up:
If this function is called many times, how would you optimize it?
*/

/*
Process the right-most bit for 32 times (at most)
*/
var reverseBits = function (n) {
  let res = 0,
    pow = 31;
  while (n > 0) {
    let rightMost = n & 1;
    res = res + (rightMost << pow);
    pow--;
    n = n >>> 1;
  }
  // take negative into positive
  return res >>> 0;
  // T.C: O(1)
  // S.C: O(1)
};
