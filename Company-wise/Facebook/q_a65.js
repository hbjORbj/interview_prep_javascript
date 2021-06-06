/*
Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection.

Each element in the result must be unique and you may return the result in any order.
*/

var intersection = function (nums1, nums2) {
  let res = [];
  nums1.length < nums2.length
    ? iterate(nums2, new Set(nums1), res)
    : iterate(nums1, new Set(nums2), res);
  return res;
  // T.C: O(M + N), M = # of nums1, N = # of nums2
  // S.C: O(min(M,N))
};

function iterate(arr, set, res) {
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      res.push(arr[i]);
      set.delete(arr[i]);
    }
  }
}
