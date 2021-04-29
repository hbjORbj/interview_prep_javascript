/*
Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
*/
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length === 0 && nums2.length === 0) {
    return null;
  }
  // Create a merged sorted array
  let mergedArr = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      mergedArr.push(nums2[j++]);
    } else {
      mergedArr.push(nums1[i++]);
    }
  }
  // Flush remaining elements into mergedArr
  while (i < nums1.length) {
    mergedArr.push(nums1[i++]);
  }
  while (j < nums2.length) {
    mergedArr.push(nums2[j++]);
  }

  // Get Median
  let mid = Math.floor((mergedArr.length - 1) / 2);
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[mid] + mergedArr[mid + 1]) / 2;
  } else {
    return mergedArr[mid];
  }
  // T.C: O(M + N), where M = # of elements in nums1 and N = # of elements in nums2
  // S.C: O(M + N)
};

/*
Qs:
1. Which is the median for even-lengthed arrays?
- Get the average of the two medians.
2. Should I get the median of one merged sorted array?
- Yes.

Solution:
The most straightforward way is to merge the two arrays into one sorted array and find the median.
We can do this by creating a new array and fill elements in sorted order.    
*/

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length === 0 && nums2.length === 0) {
    return null;
  }
  let len = nums1.length + nums2.length;
  let i = 0,
    j = 0;
  let mid = Math.floor((len - 1) / 2);
  while (i < nums1.length && j < nums2.length && i + j < mid) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  // for the case where end of an array was reached before the median was found
  while (i < nums1.length && i + j < mid) {
    i++;
  }
  while (j < nums2.length && i + j < mid) {
    j++;
  }
  let median = null;
  let secondMedian = null;
  if (i < nums1.length && j < nums2.length) {
    median = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];
  } else {
    median = i < nums1.length ? nums1[i++] : nums2[j++];
  }
  // If there is only one median (odd-length array)
  if (len % 2 === 1) {
    return median;
  } else {
    if (i < nums1.length && j < nums2.length) {
      secondMedian = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];
    } else {
      secondMedian = i < nums1.length ? nums1[i++] : nums2[j++];
    }
    return (median + secondMedian) / 2;
  }
  // T.C: O(M + N), where M = # of elements in nums1 and N = # of elements in nums2
  // S.C: O(1)
};
