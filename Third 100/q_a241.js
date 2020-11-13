/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).
*/

// Intuitive Solution
var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = [];
    let idx1 = 0, idx2 = 0;
    while (idx1 < nums1.length && idx2 < nums2.length) {
        if (nums1[idx1] < nums2[idx2]) {
            sorted.push(nums1[idx1]);
            idx1++;
        } else {
            sorted.push(nums2[idx2]);
            idx2++;
        }
    }
    while (idx1 < nums1.length) sorted.push(nums1[idx1++]);
    while (idx2 < nums2.length) sorted.push(nums2[idx2++]);
    let mid = Math.floor((sorted.length-1) / 2);
    return sorted.length % 2 == 1 ? sorted[mid] : (sorted[mid] + sorted[mid+1]) / 2;
    // Time Complexity: O(max(m,n))
    // Space Complexity: O(m+n)
};

// Optimal Solution
var findMedianSortedArrays = function(nums1, nums2) {

};