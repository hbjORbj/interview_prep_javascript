/*
Minimum Domino Rotations For Equal Row

In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1.
*/

var minDominoRotations = function (tops, bottoms) {
  if (
    tops === null ||
    bottoms === null ||
    tops.length === 0 ||
    bottoms.length === 0 ||
    tops.length !== bottoms.length
  ) {
    return -1;
  }
  let n = tops.length;
  let countTop = new Array(7).fill(0),
    countBottom = new Array(7).fill(0);
  let countSame = new Array(7).fill(0);
  for (let i = 0; i < n; i++) {
    countTop[tops[i]]++;
    countBottom[bottoms[i]]++;
    if (tops[i] === bottoms[i]) countSame[tops[i]]++;
  }
  for (let i = 0; i < 7; i++) {
    if (countTop[i] + countBottom[i] - countSame[i] === n) {
      let swap1 = n - countTop[i];
      let swap2 = n - countBottom[i];
      return Math.min(swap1, swap2);
    }
  }
  return -1;
  // T.C: O(N)
  // S.C: O(1)
  // ex) tops:    [2,3,2,3,2]
  //     bottoms: [5,2,6,2,2]
  // we can see that the number that satisfies this condition,
  // countTop[i] + countBottom[i] - countSame[i] = n, can occupy the whole row
};
