/*
Custom Sort String

order and str are strings composed of lowercase letters. In order, no letter occurs more than once.

order was sorted in some custom order previously. We want to permute the characters of str so that they match the order that order was sorted. More specifically, if x occurs before y in order, then x should occur before y in the returned string.

Return any permutation of str (as a string) that satisfies this property.
*/

// Idea:
// 1. Iterate through order (you access the most important character to the least important character)
// 2. Find all occurrences of that character and push them to the front in place by using swap index.
// 3. At the end, your string will be in the given custom order and characters that do not occur in `order` are at the end.
var customSortString = function (order, str) {
  let swapIdx = 0;
  let arr = str.split("");
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === order[i]) {
        swap(arr, swapIdx, j);
        swapIdx++;
      }
    }
  }
  return arr.join("");
  // T.C: O(26*N)  = O(N)
  // S.C: O(N), but O(1) if input was an array rather than a string
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
