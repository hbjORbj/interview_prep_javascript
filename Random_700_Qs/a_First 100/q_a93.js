/*
Given two int arrays, A and B, A is numerator, B is denominator.

Ex) A: [1,2,1], B: [2,3,3] we have the following fractions: 1/2, 2/3, 1/3.

Find all pairs that add up to 1.

Return modulo 10^7 since the input can be large.

Qs:
1. Should I consider 0 and 1 as fractions?
- No.
2. If there are duplicate fractions, what to do?
- Consider there is only one such fraction.
3. Can I use the same element twice? For example, adding 1/2 twice to have a sum of 1?
- No, you have to use each fraction only once.
*/

function countPairs(A, B) {
  let fractions = new Set();
  for (let numerator of A) {
    for (let denominator of B) {
      let fraction = (numerator / denominator).toFixed(5);
      if (fraction == 1) continue;
      if (fraction > 0 || fraction < 0) {
        fractions.add(fraction);
      }
    }
  }
  let m = new Map(),
    count = 0;
  for (let fraction of fractions) {
    let complement = (1 - fraction).toFixed(5);
    if (m.has(complement)) count = (count + 1) % 10 ** 7;
    else m.set(fraction, 1);
  }
  return count;
}

console.log(countPairs([1, 2, 1], [2, 3, 3]));
console.log(countPairs([3, 2, 1], [5, 3, 1]));
console.log(countPairs([1, 1, 1], [2, 2, 2]));
console.log(countPairs([-2, 7], [5]));
console.log(countPairs([1], []));
console.log(countPairs([], [1]));

// [1,2,1], [2,3,3] => 1 (1/3 + 2/3)
// [3,2,1], [5,3,1] => 2
// [1,1,1], [2,2,2] => 0
// [-2,7], [5] => 1 (-2/5 + 7/5)
// [], [1] => 0
// [1], [] => 0

// Time Complexity: O(n)
// Space Complexity: O(n)
