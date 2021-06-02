/*
Intersection of Three Sorted Arrays

Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order,

return a sorted array of only the integers that appeared in all three arrays.
*/

var arraysIntersection = function (arr1, arr2, arr3) {
  let idx1 = 0,
    idx2 = 0,
    idx3 = 0;
  let res = [];
  while (idx1 < arr1.length && idx2 < arr2.length && idx3 < arr3.length) {
    if (arr1[idx1] === arr2[idx2] && arr2[idx2] === arr3[idx3]) {
      res.push(arr1[idx1]);
      idx1++, idx2++, idx3++;
    } else if (arr1[idx1] < arr2[idx2]) {
      idx1++;
    } else if (arr2[idx2] < arr3[idx3]) {
      idx2++;
    } else {
      idx3++;
    }
  }
  return res;
  // T.C: O(min(M1, M2, M3))
  // S.C: O(1), assuming that we don't count the output array as extra space
};
