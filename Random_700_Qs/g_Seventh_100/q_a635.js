/*
When passed a decimal digit X, return the value of X+XX+XXX+XXXX.

E.g. if the supplied digit is 3 it should return 3702 (3+33+333+3333).
*/

/*
In order to compute a new value, We repeatedly multiply10 to given number and add the previous value.
Hence, we will keep track of previous value and add it to figure out the correct current value.
*/
function encodeNumber(X) {
  if (X === 0) return 0;
  let res = 0, prev = 0;
  for (let i = 0; i < 4; i++) {
    let cur = prev + X * Math.pow(10, i);
    res += cur;
    prev = cur;
  }
  return res;
  // T.C: O(1)
  // S.C: O(1)
}

console.log(encodeNumber(3));
