/*
Custom Sort String

order and str are strings composed of lowercase letters. In order, no letter occurs more than once.

order was sorted in some custom order previously. We want to permute the characters of str so that they match the order that order was sorted. More specifically, if x occurs before y in order, then x should occur before y in the returned string.

Return any permutation of str (as a string) that satisfies this property.
*/

// First Solution
var customSortString = function (order, str) {
  let count = new Array(26).fill(0);
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i) - 97;
    count[charCode]++;
  }
  for (let i = 0; i < order.length; i++) {
    let charCode = order.charCodeAt(i) - 97;
    if (count[charCode] > 0) {
      for (let j = 0; j < count[charCode]; j++) res.push(order[i]);
      count[charCode] = 0;
    }
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      for (let j = 0; j < count[i]; j++) res.push(String.fromCharCode(i + 97));
    }
  }
  return res.join("");
  // T.C: O(N)
  // S.C: O(N)
};

// Second Solution
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

// Third Solution
var customSortString = function (order, str) {
  let chars = new Array(26).fill(-1);
  for (let i = 0; i < order.length; i++) {
    let charCode = order.charCodeAt(i) - 97;
    chars[charCode] = i;
  }
  let ordered = new Array(order.length).fill("");
  let nonOrdered = [];
  for (let i = 0; i < str.length; i++) {
    let idx = chars[str.charCodeAt(i) - 97];
    if (idx === -1) {
      nonOrdered.push(str[i]);
    } else {
      ordered[idx] += str[i];
    }
  }
  return ordered.join("") + nonOrdered.join("");
  // T.C: O(N), N = length of str
  // S.C: O(N)
};
