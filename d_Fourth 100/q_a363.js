/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
- The number of elements initialized in nums1 and nums2 are m and n respectively.
- You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
*/

var merge = function(nums1, m, nums2, n) {
    let idx1 = m - 1, idx2 = n - 1, insertIdx = m + n - 1;
    while (idx2 >= 0) { // nums1 is already sorted
        if (nums1[idx1] > nums2[idx2]) {
            nums1[insertIdx] = nums1[idx1--];
        } else {
            nums1[insertIdx] = nums2[idx2--];
        }    
        insertIdx--;
    }
    // Time Complexity: O(M + N)
    // Space Complexity: O(1)
};
