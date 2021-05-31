/*
Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively.

You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
*/

var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1;
  let end = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[end--] = nums2[j--];
    } else {
      nums1[end--] = nums1[i--];
    }
  }
  while (j >= 0) {
    nums1[end--] = nums2[j--];
  }
  // T.C: O(M + N)
  // S.C: O(1)
};
